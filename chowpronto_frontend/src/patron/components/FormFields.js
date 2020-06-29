import React from "react";
import { StyledBoxContainer } from "../../shared_components/BoxContainer";
import styled from "styled-components";

export function PasswordFields({ handleChange, passwordInput }) {
  return (
    <>
      <StyledInputContainer>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={passwordInput.password || ""}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="password"
          placeholder="password confirmation"
          name="passwordConfirm"
          value={passwordInput.passwordConfirm || ""}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
    </>
  );
}

export function UserDataFields({ handleChange, formInput }) {
  return (
    <>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formInput.name}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="address"
          name="address"
          value={formInput.address}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="postcode"
          name="postcode"
          value={formInput.postcode}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={formInput.phone}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formInput.email}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
    </>
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
