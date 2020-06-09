import React from "react";
import SVGContainer from "./SVGContainer";

function Icon(props) {
  return (
    <SVGContainer {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        fill="none"
        viewBox="0 0 21 24"
      >
        <path
          stroke="#F99999"
          strokeWidth="3"
          d="M2.074 11.87H17.572V22.109H2.074z"
        ></path>
        <path
          stroke="#F99999"
          strokeWidth="2.008"
          d="M0.634 1.129H16.819V3.137H0.634z"
          transform="matrix(.9821 .18834 -.35062 .93652 3.02 .693)"
        ></path>
      </svg>
    </SVGContainer>
  );
}

export default Icon;
