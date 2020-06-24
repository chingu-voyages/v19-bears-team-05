import React from "react";
import styled from "styled-components";
export function Button(props) {
  return (
    <StyledButton role="button" type={props.type} {...props}>
      {props.children}
      {props.buttonLegend}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  flex: 1;
  font-weight: 500;
  font-size: 17px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 0.02em;
  background: #3949ab;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;
