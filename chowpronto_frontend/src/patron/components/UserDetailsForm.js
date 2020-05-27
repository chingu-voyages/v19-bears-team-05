import React, { useContext } from "react";
import { StyledBoxContainer } from "../../shared_components/BoxContainer";
import styled from "styled-components";
import { MenuContext } from "../../state/MenuContext";

export default function UserDetailsForm() {
  let { state, dispatch } = useContext(MenuContext);
  console.log("state", state);
  state = {
    tags: [],
    search: "",
    first_name: "",
    surname: "",
    address_line_1: "",
    address_line_2: "",
    town: "",
    county: "",
    postcode: "",
    mobile_number: "",
    email_address: "",
  };

  function handleChange(e) {
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
          placeholder="first_name"
          value={state.first_name}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="surname"
          value={state.surname}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="address line 1"
          value={state.address_line_1}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="address_line_2"
          value={state.address_line_2}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="town"
          value={state.town}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="county"
          value={state.county}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="postcode"
          value={state.postcode}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="tel"
          placeholder="mobile_number"
          value={state.mobile_number}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="email"
          placeholder="email_address"
          value={state.email_address}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
    </form>
  );
}

const StyledInputContainer = styled(StyledBoxContainer)`
  input {
    width: 100%;
    height: 100%;
    font-family: inherit;
    border: none;
    outline: none;
    background: transparent;
  }
`;
