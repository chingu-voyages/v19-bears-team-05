import React, { useState, useContext } from "react";
import ChowButton from "../../../shared_components/ChowButton";
import { PasswordFields } from "../../../../src/patron/components/FormFields";
import updateAccount from "../../../api/updateAccount";
import UserContext from "../../../state/UserContext";

export default function ChangePassword() {
  const initialPasswords = {
    password: "",
    passwordConfirm: "",
  };
  const { user } = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [passwords, setPasswords] = useState(initialPasswords);
  const [successMsg, setSuccessMsg] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (passwords.password.length < 8 && passwords.passwordConfirm.length < 8) {
      setErrMsg("The password must have at least 8 characters");
    } else if (passwords.password !== passwords.passwordConfirm) {
      setErrMsg("Password and confirm password should match");
    } else {
      updateAccount(user.token, user.patron._id, {
        password: passwords.password,
      })
        .then((res) => {
          setSuccessMsg(res.message);
          setIsEdit(false);
          setPasswords(initialPasswords);
        })
        .catch((err) => {
          setErrMsg("Something went wrong, couldn't update password");
          setPasswords(initialPasswords);
        });
    }
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
              setErrMsg("");
              setSuccessMsg("");
            }}
          />
        )}
      </div>
      {successMsg && <p style={{ color: "#3949ab" }}>{successMsg}</p>}
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
