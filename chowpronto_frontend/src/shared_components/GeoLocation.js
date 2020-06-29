import React from "react";
import styled from "styled-components";
import { useState } from "react";

export function GeoButton(props) {
  function getLocation() {
    if ("geolocation" in navigator) {
      props.setLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          `https://api.postcodes.io/postcodes?lon=${position.coords.longitude.toString()}&lat=${position.coords.latitude.toString()}&radius=250`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then(({ result }) => {
            props.onClick(result[0]);
            props.setLoading(false);
          })
          .catch((err) => console.log("err", err));
      });
    }
  }
  return (
    <StyledButton role="button" onClick={() => getLocation()}>
      <Icon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  flex: 0.2;
  margin-left: 10px;
  font-weight: 500;
  font-size: 17px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.02em;
  background: #3949ab;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  outline: none;
  &:hover {
    svg {
      stroke: #ffffff;
      stroke-width: 4;
    }
  }
  &:active {
    background: #263173;
  }
  svg {
    stroke: #dce1ff;
    width: 100%;
    height: 100%;
    stroke-width: 3;
  }
`;

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45">
      <circle cx="22.5" cy="22.5" r="14.088"></circle>
      <path strokeLinejoin="round" d="M32.1 22.5H41.077V22.5H32.1z"></path>
      <path strokeLinejoin="round" d="M3.924 22.5H12.901V22.5H3.924z"></path>
      <path
        strokeLinejoin="round"
        d="M22.5 12.9H31.477V12.9H22.5z"
        transform="rotate(-90 22.5 12.9)"
      ></path>
      <path
        strokeLinejoin="round"
        d="M23 22.093H23.814V23.093H23z"
        transform="rotate(90.002 23 22.093)"
      ></path>
      <path
        strokeLinejoin="round"
        d="M22.5 41.076H31.477V41.076H22.5z"
        transform="rotate(-90 22.5 41.076)"
      ></path>
    </svg>
  );
}

export default GeoButton;
