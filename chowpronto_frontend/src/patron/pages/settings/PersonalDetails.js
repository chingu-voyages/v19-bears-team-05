import React, { useContext, useState, useEffect } from "react";

import { Title, BorderedContainer } from "./components/styledComponents";
import ChowButton from "../../../shared_components/ChowButton";
import UserContext from "../../../state/UserContext";
import {
  PasswordFields,
  UserDataFields,
} from "../../../../src/patron/components/FormFields";
import DeleteAccount from "./DeleteAccount";

export default function PersonalDetails() {
  return (
    <article>
      <Title>You can change your personal details here</Title>
      <BorderedContainer>
        <Details />
        <ChangePassword />
        <DeleteAccount />
      </BorderedContainer>
    </article>
  );
}

function Details() {
  const { user } = useContext(UserContext);
  const [patron, setPatron] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (user.patron) {
      setPatron(user.patron);
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    alert("submit");
  }

  function handleChange(e) {
    setPatron({ ...patron, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Personal Details</h3>
        {!isEdit && (
          <ChowButton
            secondary
            title="edit"
            style={{
              margin: "5px",
              padding: "0 15px",
              height: "40px",
              width: "80px",
            }}
            onClick={() => {
              setIsEdit(true);
              setPatron(user.patron);
            }}
          />
        )}
      </div>

      {!patron ? null : !isEdit ? (
        <div
          style={{
            textAlign: "start",
            display: "grid",
            gridTemplateColumns: "0.4fr 1fr",
          }}
        >
          <span>name: </span> <span>{patron.name}</span>
          <span>email:</span> <span>{patron.email}</span>
          <span>address:</span> <span>{patron.address}</span>
          <span>post code:</span> <span>{patron.postcode}</span>
          <span>phone:</span> <span>{patron.phone}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <UserDataFields handleChange={handleChange} formInput={patron} />
          <ChowButton
            primary
            title="save"
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
    </>
  );
}

function ChangePassword() {
  const [isEdit, setIsEdit] = useState(false);
  const [passwords, setPasswords] = useState({
    password: "",
    passwordConfirm: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    alert("submit");
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
          <ChowButton
            primary
            title="save"
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
