import React, { useState } from "react";
import ChowButton from "../../../shared_components/ChowButton";
import { PasswordFields } from "../../../../src/patron/components/FormFields";

export default function ChangePassword() {
  const initialPasswords = {
    password: "",
    passwordConfirm: "",
  };
  const [isEdit, setIsEdit] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [passwords, setPasswords] = useState(initialPasswords);
  function handleSubmit(e) {
    e.preventDefault();
    if (
      passwords.password.length === 0 &&
      passwords.passwordConfirm.length === 0
    ) {
      setErrMsg("You can't save empty fields");
    }
    passwords.password !== passwords.passwordConfirm &&
      setErrMsg("Password and confirm password should match");
  }
  function handleChange(e) {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Password</h3>
        {!isEdit && (
          <ChowButton
            secondary
            title="change"
            style={{
              margin: "5px",
              padding: "0 15px",
              height: "40px",
              width: "80px",
            }}
            onClick={() => {
              setIsEdit(true);
            }}
          />
        )}
      </div>
      {isEdit && (
        <form onSubmit={handleSubmit}>
          <PasswordFields
            handleChange={handleChange}
            passwordInput={passwords}
          />
          {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
          <ChowButton
            primary
            title="save"
            style={{ margin: "5px", fontWeight: 700, padding: "15px" }}
          />
          <ChowButton
            secondary
            title="cancel"
            style={{ margin: "5px", padding: "15px" }}
            onClick={() => {
              setIsEdit(false);
              setErrMsg("");
              setPasswords(initialPasswords);
            }}
          />
        </form>
      )}
    </div>
  );
}
