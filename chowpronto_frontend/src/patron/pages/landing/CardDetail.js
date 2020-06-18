import React from "react";
import styled from "styled-components";
// Individual Card. Returns svg, title, and text.

export function CardDetail(props) {
  const {
    title,
    text,
    Svg: { src, alt },
  } = props;

  return (
    <StyledCard>
      {/* <div style={{ padding: " 0 1em 0 1m" }}> */}
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p style={{ textAlign: "start" }}>{text}</p>
      {/* </div> */}
    </StyledCard>
  );
}

const StyledCard = styled.section`
  padding: 1em;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.09);
  max-height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
  p {
    text-align: center;
  }
  @media (max-width: 900px) {
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: 1fr 4fr;
    img {
      grid-row: span 2;
    }
    h3 {
      grid-column: span 2;
    }
    p,
    img {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transform: translate(0px, -200px);
    }
    &:hover {
      p,
      img {
        visibility: visible;
        position: static;
        opacity: 1;
        overflow: hidden;
        transform: translate(0px, 0px);
        transition: opacity 0.2s cubic-bezier(0.5, 0, 0.5, 1);
      }
      h3 {
        grid-column: 2;
      }
    }
  }
`;
