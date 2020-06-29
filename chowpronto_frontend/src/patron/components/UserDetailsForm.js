import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "../../state/MenuContext";
import useAuth from "../../hooks/useAuth";
import { PasswordFields, UserDataFields } from "./FormFields";

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
      <UserDataFields handleChange={handleChange} formInput={ctx.formState} />
      {!user.token && (
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
        <PasswordFields
          handleChange={handleChange}
          passwordInput={ctx.formState}
        />
      )}
    </form>
  );
}
