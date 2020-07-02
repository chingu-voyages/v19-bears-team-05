import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import useMenuItems from "../../../../hooks/useMenuItems";
import { MenuContext } from "../../../../state/MenuContext";
import { StyledPageMain } from "../../../components/StyledPageMain";

const MenuMain = (props) => {
  const context = useContext(MenuContext);
  const { state } = context;
  const { menuItems, isLoading } = useMenuItems(state);
  return (
    <>
      <StyledPageMain>
<<<<<<< Updated upstream
        {menuItems.length < 1 ? (
          <h1>Please wait whilst we build a custom menu for you</h1>
=======
        {isLoading ? (
          <h1>Please wait whilst we build a custom menu for you</h1>
        ) : menuItems.length < 1 ? (
          <h1>Sorry, no results for your request</h1>
>>>>>>> Stashed changes
        ) : (
          menuItems.map((v) => <MenuItem {...v} key={v._id} />)
        )}
      </StyledPageMain>
    </>
  );
};

export default MenuMain;
