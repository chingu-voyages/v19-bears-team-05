import React from "react";
import TextDisplayBox from "../../shared_components/TextDisplayBox";

const DeliveryAddress = (props) => {
  return (
    <TextDisplayBox
      title="delivery address"
      value="EX1 1AA"
      readOnly
      {...props}
    />
  );
};

export default DeliveryAddress;
