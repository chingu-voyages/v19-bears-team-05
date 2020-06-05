import React from "react";
import TextDisplayBox from "../../shared_components/TextDisplayBox";

const DeliverySelector = (props) => {
  return (
    <TextDisplayBox
      title="delivery time"
      value="Today 17:30"
      onChange={props.onChange}
    />
  );
};

export default DeliverySelector;
