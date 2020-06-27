import React, { useState } from "react";
import ChowButton from "../../../shared_components/ChowButton";

export default function DeleteAccount() {
  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert("submit");
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
              setIsEdit(true);
            }}
          />
        )}
      </div>
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
