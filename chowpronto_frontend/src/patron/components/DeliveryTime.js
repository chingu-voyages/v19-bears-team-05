import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import { MenuContext } from "../../state/MenuContext";

const DeliverySelector = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  return (
    <TextDisplayBox
      title="delivery time"
      value={
        "Today " +
        state.deliveryDate.getHours() +
        ":" +
        state.deliveryDate.getMinutes()
      }
      onChange={props.onChange}
    />
  );
};

export default DeliverySelector;
