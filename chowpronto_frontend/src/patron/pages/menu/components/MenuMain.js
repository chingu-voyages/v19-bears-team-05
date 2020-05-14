import React from "react";
import MenuItem from "./MenuItem";

const MenuMain = (props) => {
  let menuItems = [];
  return (
    <>
      {menuItems.map((v) => (
        <MenuItem {...v} />
      ))}
    </>
  );
};

export default MenuMain;
