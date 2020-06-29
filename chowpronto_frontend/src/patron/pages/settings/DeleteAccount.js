import React, { useState, useContext } from "react";
import ChowButton from "../../../shared_components/ChowButton";
import deleteAccount from "../../../api/deleteAccount";
import UserContext from "../../../state/UserContext";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function DeleteAccount() {
  const { user } = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    deleteAccount(user.token, user.patron._id)
      .then((res) => {
        logout();
        history.push("/");
      })
      .catch((err) => {
        setErrMsg("Sorry, fail to delete account");
        setIsEdit(false);
      });
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Account</h3>
        {!isEdit && (
          <ChowButton
            secondary
            title="Delete"
            style={{
              margin: "5px",
              padding: "0 15px",
              height: "40px",
              width: "80px",
            }}
            onClick={() => {
              setErrMsg("");
              setIsEdit(true);
            }}
          />
        )}
      </div>
      {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      {isEdit && (
        <form onSubmit={handleSubmit}>
          <p>
            By clicking delete you will delete your account and all details
            about it. You will not be able to restore it.
          </p>
          <ChowButton
            primary
            title="Delete"
            style={{ margin: "5px", fontWeight: 700, padding: "15px" }}
          />
          <ChowButton
            secondary
            title="cancel"
            style={{ margin: "5px", padding: "15px" }}
            onClick={() => setIsEdit(false)}
          />
        </form>
      )}
    </div>
  );
}
