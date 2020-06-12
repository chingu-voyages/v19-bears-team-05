import React, { useState } from "react";

function Icon() {
  const [mouseState, setMouseState] = useState("idle");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      fill="none"
      viewBox="0 0 27 26"
      onMouseEnter={() => setMouseState("hover")}
      onMouseLeave={() => setMouseState("idle")}
      onPointerDown={() => setMouseState("click")}
      onPointerUp={() => setMouseState("idle")}
      style={{ cursor: "pointer" }}
    >
      <path
        fill={
          mouseState === "idle"
            ? "none"
            : mouseState === "hover"
            ? "#3949AB22"
            : "#3949AB"
        }
        stroke="#3949AB"
        strokeWidth="1.471"
        d="M25.912 13.034c0 6.469-5.481 11.765-12.31 11.765-6.828 0-12.309-5.296-12.309-11.765 0-6.468 5.481-11.764 12.31-11.764 6.828 0 12.309 5.296 12.309 11.764z"
      ></path>
      <path
        stroke={mouseState === "click" ? "white" : "#3949AB"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.471"
        d="M8.231 13.034h10.743m-5.372 5.147V7.887"
      ></path>
    </svg>
  );
}

export default Icon;
