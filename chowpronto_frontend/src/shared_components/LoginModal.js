import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import { ClearButton } from "./ClearButton";

const LoginModal = (props) => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { login } = useAuth();
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div className="modal-page">
      <StyledModalMessage>
        <form
          action="POST"
          onSubmit={(e) => {
            e.preventDefault();
            login(...formState);
          }}
        >
          <h1>Login</h1>
          <Link to={(location) => location.pathname}>
            <CloseButton className="close">close</CloseButton>
          </Link>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleChange(e)}
            value={formState.email}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <p>
            Not a user yet? Don't worry, we'll let you register when you
            checkout
          </p>
        </form>
      </StyledModalMessage>
    </div>
  );
};

const StyledModalMessage = styled.div`
  background: white;
  width: 50vw;
  min-width: 300px;
  position: relative;
`;

const CloseButton = styled(ClearButton)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;
export default LoginModal;
