import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TextDisplayBox from "../../shared_components/TextDisplayBox";
import { MenuContext } from "../../state/MenuContext";

const DeliveryAddress = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  return <TextDisplayBox title="delivery address" value="EX1 1AA" {...props} />;
};

export default DeliveryAddress;
