import React, { useContext } from "react";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import { MenuContext } from "../../state/MenuContext";

const DeliverySelector = (props) => {
  const { state } = useContext(MenuContext);
  return (
    <TextDisplayBox
      title="delivery time"
      value={
        "Today " +
        state.deliveryDate.getHours() +
        ":" +
        state.deliveryDate.getMinutes()
      }
      readOnly
    />
  );
};

export default DeliverySelector;
