import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="25"
      // height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <circle cx="12.307" cy="12.61" r="10" fill="#DCE1FF"></circle>
      <circle
        cx="12.307"
        cy="12.61"
        r="11"
        stroke="#3949AB"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#3949AB"
        strokeLinecap="round"
        strokeWidth="2"
        d="M15.745 9.171l-6.877 6.877"
      ></path>
      <path
        stroke="#3949AB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.745 16.048L8.869 9.17"
      ></path>
    </svg>
  );
}

export default Icon;
