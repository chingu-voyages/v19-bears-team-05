import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import useMenuItems from "../../../../hooks/useMenuItems";
import { MenuContext } from "../../../../state/MenuContext";
import { StyledPageMain } from "../../../components/StyledPageMain";

const MenuMain = (props) => {
  const context = useContext(MenuContext);
  const { state } = context;
  const { menuItems } = useMenuItems(state);
  return (
    <>
      <StyledPageMain>
        {menuItems.map((v) => (
          <MenuItem {...v} key={v._id} />
        ))}
      </StyledPageMain>
    </>
  );
};

export default MenuMain;
