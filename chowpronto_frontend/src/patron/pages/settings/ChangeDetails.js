import React, { useContext, useState, useEffect } from "react";
import ChowButton from "../../../shared_components/ChowButton";
import UserContext from "../../../state/UserContext";
import { UserDataFields } from "../../../../src/patron/components/FormFields";
import updateAccount from "../../../api/updateAccount";

export default function ChangeDetails() {
  const { user } = useContext(UserContext);
  const [patron, setPatron] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (user.patron) {
      setPatron(user.patron);
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      patron.name.length === 0 ||
      patron.email.length === 0 ||
      patron.postcode.length === 0 ||
      patron.address.length === 0 ||
      patron.phone.length === 0
    ) {
      setErrMsg("Please, fill in all details");
    } else if (!/^\+\d{2}\W\d{4}\W\d{4}$/.test(patron.phone)) {
      setErrMsg("Phone number should be in the format +12 3456 7890");
    } else {
      updateAccount(user.token, user.patron._id, { patron })
        .then((res) => {
          setSuccessMsg(res.message);
          setIsEdit(false);
          setErrMsg("");
          console.log(res);
        })

        .catch((err) => {
          err.json().then((json) => {
            setErrMsg(json.errorMsg);
          });
        });
    }
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
              setErrMsg("");
              setSuccessMsg("");
            }}
          />
        )}
      </div>
      {successMsg && <p style={{ color: "#3949ab" }}>{successMsg}</p>}
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
            }}
          />
        </form>
      )}
    </>
  );
}
