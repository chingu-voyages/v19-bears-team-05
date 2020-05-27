import React from "react";
import styled from "styled-components";
import ChowButton from "../../../../shared_components/ChowButton";
import { StyledBoxContainer } from "../../../../shared_components/BoxContainer";

export default function Login() {
  return (
    <Divider>
      <h3>Already Registered?</h3>
      <ChowButton primary elevated title="login" />
    </Divider>
  );
}

const Divider = styled(StyledBoxContainer)`
  border: none;
  border-top: ${({ theme }) => theme.bd200u};
  flex-direction: column;
  border-radius: 0;
  flex: 1;
`;
