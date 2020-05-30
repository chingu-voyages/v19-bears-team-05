import React, { useContext, useState } from "react";
import { StyledBoxContainer } from "../../shared_components/BoxContainer";
import styled from "styled-components";
import { MenuContext } from "../../state/MenuContext";

export default function UserDetailsForm() {
  let { state: ctx, dispatch } = useContext(MenuContext);
  const initialState = {
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    register: false,
    password: "",
  };
  const [formState, setFormState] = useState(initialState);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <form action="POST">
      <StyledInputContainer>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formState.name}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="address"
          name="address"
          value={formState.address}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="postcode"
          name="postcode"
          value={formState.postcode}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={formState.phone}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formState.email}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      {!formState.register ? (
        <label htmlFor="register">
          Would you like to register?
          <input
            type="checkbox"
            name="register"
            id="register"
            value="true"
            onChange={(e) => handleChange(e)}
          />
        </label>
      ) : (
        <StyledInputContainer>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formState.password}
            onChange={(e) => handleChange(e)}
          />
        </StyledInputContainer>
      )}
    </form>
  );
}

const StyledInputContainer = styled(StyledBoxContainer)`
  input {
    width: 100%;
    height: 100%;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fz300};
    border: none;
    outline: none;
    background: transparent;
  }
`;
