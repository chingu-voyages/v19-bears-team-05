import React, { useContext } from "react";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import { MenuContext } from "../../state/MenuContext";
import parseTime from "../../helpers/parseTime";

const DeliverySelector = (props) => {
  const { state } = useContext(MenuContext);
  return (
    <TextDisplayBox
      title="delivery time"
      value={parseTime(state.deliveryDate)}
      readOnly
    />
  );
};

export default DeliverySelector;
