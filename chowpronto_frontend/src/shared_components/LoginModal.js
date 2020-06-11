import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import { ClearButton } from "./ClearButton";
import ModalBackground from "../patron/components/ModalBackground";

const LoginModal = (props) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const location = useLocation();
  return (
    <ModalBackground>
      <div className="modal">
        <h1>Login</h1>
        <CloseButton onClick={() => history.goBack()}>close</CloseButton>
        <form
          action="POST"
          onSubmit={(e) => {
            e.preventDefault();
            login(formData.email, formData.password);
            history.goBack();
          }}
        >
          <label htmlFor="email">email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button type="submit">Go!</button>
        </form>
        <p>
          Not a user yet? Don't worry, we'll let you register when you checkout
        </p>
      </div>
    </ModalBackground>
  );
};

const CloseButton = styled(ClearButton)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;
export default LoginModal;
