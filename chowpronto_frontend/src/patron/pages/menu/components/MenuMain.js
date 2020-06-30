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
        {menuItems.length < 1 ? (
          <h1>Please wait whilst we build a custom menu for you</h1>
        ) : (
          menuItems.map((v) => <MenuItem {...v} key={v._id} />)
        )}
      </StyledPageMain>
    </>
  );
};

export default MenuMain;
