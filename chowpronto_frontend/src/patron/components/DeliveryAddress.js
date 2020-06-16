import React, { useContext } from "react";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import { MenuContext } from "../../state/MenuContext";

const DeliveryAddress = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  return (
    <TextDisplayBox
      title="delivery address"
      value={state.formState.postcode}
      readOnly
      {...props}
    />
  );
};

export default DeliveryAddress;
