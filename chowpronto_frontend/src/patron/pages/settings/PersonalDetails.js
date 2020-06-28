import React from "react";
import { Title, BorderedContainer } from "./components/styledComponents";
import DeleteAccount from "./DeleteAccount";
import ChangePassword from "./ChangePassword";
import ChangeDetails from "./ChangeDetails";
import { Link } from "react-router-dom";

export default function PersonalDetails() {
  return (
    <article style={{ marginTop: "1em" }}>
      <Link to="/menu"> ← back to menu</Link>
      <Title>You can change your personal details here</Title>
      <BorderedContainer>
        <ChangeDetails />
        <ChangePassword />
        <DeleteAccount />
      </BorderedContainer>
    </article>
  );
}
