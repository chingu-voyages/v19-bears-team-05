import React, { useContext, useState } from "react";
import { StyledBoxContainer } from "../../shared_components/BoxContainer";
import styled from "styled-components";
import { MenuContext } from "../../state/MenuContext";

export default function UserDetailsForm() {
  let { state, dispatch } = useContext(MenuContext);
  const [registerInput, setRegisterInput] = useState(false);
  console.log("state", state);
  state = {
    tags: [],
    search: "",
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
  };

  function handleChange(e) {
    console.log("e", e.target);
    dispatch({
      type: "form_entry",
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <form action="POST">
      <StyledInputContainer>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={state.name}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="address"
          name="address"
          value={state.address}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="postcode"
          name="postcode"
          value={state.postcode}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={state.phone}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={state.email}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      {!registerInput && (
        <label htmlFor="register">
          Would you like to register?
          <input
            type="checkbox"
            name="register"
            id="register"
            value="register"
            onChange={() => setRegisterInput(true)}
          />
        </label>
      )}
      {registerInput && (
        <div>
          <StyledInputContainer>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={(e) => handleChange(e)}
            />
          </StyledInputContainer>
        </div>
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
