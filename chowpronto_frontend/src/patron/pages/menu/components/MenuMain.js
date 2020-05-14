import React from "react";
import MenuItem from "./MenuItem";
import useMenuItems from "../../../../hooks/useMenuItems";

const MenuMain = (props) => {
  const menuItems = useMenuItems();
  return (
    <>
      <div className="menu-main">
        {menuItems.map((v) => (
          <MenuItem {...v} />
        ))}
      </div>
    </>
  );
};

export default MenuMain;
