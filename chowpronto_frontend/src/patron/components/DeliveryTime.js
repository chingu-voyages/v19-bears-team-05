import React, { useContext } from "react";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import { MenuContext } from "../../state/MenuContext";
import parseTime from "../../helpers/parseTime";

const DeliverySelector = (props) => {
  const { state } = useContext(MenuContext);
  const now = new Date();
  const now1200 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const del1200 = new Date(
    state.deliveryDate.getFullYear(),
    state.deliveryDate.getMonth(),
    state.deliveryDate.getDate()
  );
  const elapsed = (del1200 - now1200) / 1000 / 60 / 60 / 24;
  return (
    <TextDisplayBox
      title="delivery time"
      // todo today / tomorrow not showing on update
      value={parseTime(state.deliveryDate)}
      readOnly
    />
  );
};

export default DeliverySelector;
