import React, { useEffect, useState, useContext } from "react";
import MenuItem from "./MenuItem";
import useMenuItems from "../../../../hooks/useMenuItems";
import styled from "styled-components";
import { StyledMenuHeader } from "./MenuSidebar";
import { MenuContext } from "../../../../state/MenuContext";

const MenuMain = (props) => {
  const context = useContext(MenuContext);
  const { state } = context;
  const [menuItems, fetchItems] = useMenuItems(state);
  return (
    <>
      <StyledMenuMain>
        {menuItems.map((v) => (
          <MenuItem {...v} key={v._id} />
        ))}
      </StyledMenuMain>
    </>
  );
};

const StyledMenuMain = styled(StyledMenuHeader)`
  flex: 3;
`;

export default MenuMain;
