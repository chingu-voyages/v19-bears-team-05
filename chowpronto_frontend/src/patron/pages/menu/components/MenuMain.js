import React from "react";
import MenuItem from "./MenuItem";
import useMenuItems from "../../../../hooks/useMenuItems";
import styled from "styled-components";
import { StyledMenuHeader } from "./MenuSidebar";

const MenuMain = (props) => {
  const menuItems = useMenuItems();
  return (
    <>
      <StyledMenuMain>
        {menuItems.map((v) => (
          <MenuItem {...v} key={v.id} />
        ))}
      </StyledMenuMain>
    </>
  );
};

const StyledMenuMain = styled(StyledMenuHeader)`
  flex: 3;
`;

export default MenuMain;
