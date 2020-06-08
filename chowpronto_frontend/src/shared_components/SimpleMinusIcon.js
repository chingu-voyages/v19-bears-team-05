import React from "react";
import SVGContainer from "./SVGContainer";

function Icon(props) {
  return (
    <SVGContainer {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="4"
        fill="none"
        viewBox="0 0 27 4"
      >
        <path
          fill="#C4C4C4"
          stroke="#545E97"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M2.224 2.044H25.093V2.044H2.224z"
        ></path>
      </svg>
    </SVGContainer>
  );
}

export default Icon;
