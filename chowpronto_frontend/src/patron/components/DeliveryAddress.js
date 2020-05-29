import React from "react";
import { Link } from "react-router-dom";
import TextDisplayBox from "../../shared_components/TextDisplayBox";

const DeliveryAddress = (props) => {
  return <TextDisplayBox title="delivery address" value="EX1 1AA" {...props} />;
};

export default DeliveryAddress;
