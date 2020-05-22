import React from "react";
import styled from "styled-components";
import useBasket from "../../../../hooks/useBasket";
import { StyledBoxContainer } from "../../../../shared_components/BoxContainer";

const MenuItem = (props) => {
  const [basketState, updateBasket] = useBasket();
  console.log("props", props);
  return (
    <StyledMenuItem active>
      <HeaderBar>
        <StyledHeader>{props.name}</StyledHeader>
        <HeaderRight>
          <Vendor>{props.vendor}</Vendor>
          <StyledHeader>{props.unitPrice}</StyledHeader>
        </HeaderRight>
      </HeaderBar>
      <Description>{props.about}</Description>
      <HeaderBar>
        <Availability>Available : 5pm - 7pm</Availability>
        <HeaderRight>
          <button onClick={() => updateBasket({ type: "add_item" })}>
            Add
          </button>
        </HeaderRight>
      </HeaderBar>
    </StyledMenuItem>
  );
};

export default MenuItem;

const StyledMenuItem = styled(StyledBoxContainer)`
  &&& {
    margin-top: 0;
    flex-direction: column;
    align-items: flex-start;
    border: ${({ theme }) => theme.bd100f};
  }
`;

const StyledHeader = styled.h3`
  font-size: ${({ theme }) => theme.fz400};
  margin: 0;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const Vendor = styled(StyledHeader)`
  opacity: 0.3;
  font-weight: 400;
  margin-right: ${({ theme }) => theme.fz600};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.focusSecondary};
  font-size: ${({ theme }) => theme.fz300};
`;

const Availability = styled(Description)`
  margin: 0;
  font-size: ${({ theme }) => theme.fz200};
`;
