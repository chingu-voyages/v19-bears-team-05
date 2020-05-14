import React from "react";
import Logo from "../../../../shared_components/Logo";
import Filter from "../../../../shared_components/Filter";
import Search from "../../../../shared_components/Search";
import ChowButton from "../../../../shared_components/ChowButton";
import DeliverySelector from "../../../components/DeliverySelector";

const MenuSidebar = (props) => {
  return (
    <div className="menu-sidebar">
      <Logo />
      <DeliverySelector />
      <Search />
      <Filter />
      <ChowButton
        title="Basket 2 items"
        onClick={() => console.log("Button Pressed")}
      />
      <ChowButton
        title="Place Order >"
        onClick={() => console.log("Place Order Pressed")}
      />
    </div>
  );
};

export default MenuSidebar;
