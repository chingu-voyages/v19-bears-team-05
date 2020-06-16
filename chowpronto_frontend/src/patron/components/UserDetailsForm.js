import React, { useContext, useState, useEffect } from "react";
import { StyledBoxContainer } from "../../shared_components/BoxContainer";
import styled from "styled-components";
import { MenuContext } from "../../state/MenuContext";
import useAuth from "../../hooks/useAuth";

export default function UserDetailsForm() {
  let { state: ctx, dispatch } = useContext(MenuContext);
  const { getUser } = useAuth();

  const user = getUser();
  const [registerDialog, setRegisterDialog] = useState(false);

  useEffect(() => {
    if (!registerDialog) {
      dispatch({ type: "delete_passwords" });
    }
  }, [registerDialog, dispatch]);

  useEffect(() => {
    dispatch({ type: "prefill_form", user });
  }, [user, dispatch]);

  function handleChange(e) {
    dispatch({
      type: "update_form_state",
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
          value={ctx.formState.name}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="address"
          name="address"
          value={ctx.formState.address}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="text"
          placeholder="postcode"
          name="postcode"
          value={ctx.formState.postcode}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={ctx.formState.phone}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={ctx.formState.email}
          onChange={(e) => handleChange(e)}
        />
      </StyledInputContainer>
      {user.token ? (
        <></>
      ) : (
        <label htmlFor="register">
          Would you like to register?
          <input
            type="checkbox"
            name="register"
            id="register"
            value="true"
            onChange={() => setRegisterDialog(!registerDialog)}
            style={{ cursor: "pointer" }}
          />
        </label>
      )}

      {registerDialog && (
        <>
          <StyledInputContainer>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={ctx.formState.password || ""}
              onChange={(e) => handleChange(e)}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <input
              type="password"
              placeholder="password confirmation"
              name="passwordConfirm"
              value={ctx.formState.passwordConfirm || ""}
              onChange={(e) => handleChange(e)}
            />
          </StyledInputContainer>
        </>
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
