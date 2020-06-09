import React from "react";

export default function SVGContainer(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        display: "flex",
      }}
      {...props}
      role="button"
    >
      {props.children}
    </div>
  );
}
