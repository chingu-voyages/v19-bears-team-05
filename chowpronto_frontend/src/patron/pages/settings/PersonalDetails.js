import React from "react";
import { Title, BorderedContainer } from "./components/styledComponents";
import DeleteAccount from "./DeleteAccount";
import ChangePassword from "./ChangePassword";
import ChangeDetails from "./ChangeDetails";

export default function PersonalDetails() {
  return (
    <article>
      <Title>You can change your personal details here</Title>
      <BorderedContainer>
        <ChangeDetails />
        <ChangePassword />
        <DeleteAccount />
      </BorderedContainer>
    </article>
  );
}
