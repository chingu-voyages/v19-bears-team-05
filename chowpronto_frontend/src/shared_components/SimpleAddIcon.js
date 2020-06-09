import React from "react";
import SVGContainer from "./SVGContainer";

function Icon(props) {
  return (
    <SVGContainer {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        fill="none"
        viewBox="0 0 27 26"
      >
        <path
          fill="#C4C4C4"
          stroke="#545E97"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M1.874 13.044H24.743V13.044H1.874z"
        ></path>
        <path
          fill="#C4C4C4"
          stroke="#545E97"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M13.309 24.478H36.178V24.478H13.309z"
          transform="rotate(-90 13.309 24.478)"
        ></path>
      </svg>
    </SVGContainer>
  );
}

export default Icon;
