import React from "react";
import Logo from "../../../shared_components/Logo";

export default function Error404() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Logo />
      <h2>Awww... Shucks!</h2>

      <h3>There's no tasty food here</h3>
      <h3>(...404 error!)</h3>
      <h3>
        Go <a href="/">back</a> to the main page for more options
      </h3>
    </div>
  );
}
