import React from "react";
import styled from "styled-components";
import ChowButton from "../../../../shared_components/ChowButton";
import { StyledBoxContainer } from "../../../../shared_components/BoxContainer";
import useAuth from "../../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { getUser } = useAuth();
  const userLoggedIn = !!getUser().token;
  const history = useHistory();
  return (
    <Divider {...userLoggedIn}>
      <h3>Already {userLoggedIn ? "Logged In" : "Registered?"}</h3>
      <ChowButton
        primary
        elevated
        title="login"
        disabled={userLoggedIn}
        onClick={() => history.push("/login")}
      />
    </Divider>
  );
}

const Divider = styled(StyledBoxContainer)`
  border: none;
  border-top: ${({ theme }) => theme.bd200u};
  flex-direction: column;
  border-radius: 0;
  flex: 1;
  &:hover {
    background-color: none;
  }
  opacity: ${({ userLoggedIn }) => (userLoggedIn ? 0.25 : 1)};
`;
