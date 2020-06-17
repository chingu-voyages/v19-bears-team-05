import React from "react";
// Individual Card. Returns svg, title, and text.

export function CardDetail(props) {
  const {
    title,
    text,
    Svg: { src, alt },
  } = props;

  return (
    <section
      style={{
        padding: "1em",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.09)",
        height: "336px",
        width: "320px",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: " 0 1em 0 1m" }}>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <p style={{ textAlign: "start" }}>{text}</p>
      </div>
    </section>
  );
}
