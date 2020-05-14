import React from "react";

const ChowButton = ({ title, onClick = () => {} }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default ChowButton;
