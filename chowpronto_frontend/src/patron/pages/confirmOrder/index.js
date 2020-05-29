import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import { StyledSidebar } from "../../components/StyledSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";
import ChowButton from "../../../shared_components/ChowButton";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import UserDetailsForm from "../../components/UserDetailsForm";
import useAuth from "../../../hooks/useAuth";
import { MenuContext } from "../../../state/MenuContext";

const ConfirmOrderPage = (props) => {
  const { getUser, login, logout } = useAuth();
  const user = false;
  const { state, dispatch } = useContext(MenuContext);
  const [userData, setUserData] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      fetch("/api/patrons/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "abc@gmail.com",
          name: "New Patron",
          password: "12345678",
          phone: "+12-3457-8910",
          address: "123 Flat, 12 Hope Street, Faith City, Wanderland",
          postcode: "W 765 HS",
          role: "GUEST",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .then(() => {
          saveOrder();
        })
        .catch((err) => console.log("err", err));
    }
    try {
      saveOrder();
    } catch (err) {
      console.log("err", err);
    }
    // at this point the user should be stored on state

    //  headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json"
    //     }
  }
  return (
    <PageLayout>
      <StyledSidebar style={{ flex: 1.5 }}>
        <OrderDetails />
        <Login />
      </StyledSidebar>
      <StyledPageMain>
        <UserDetailsForm />
        <SubmitButton title="submit" primary onClick={(e) => handleSubmit(e)} />
      </StyledPageMain>
      <input type="password" />
    </PageLayout>
  );
};

const SubmitButton = styled(ChowButton)`
  max-width: 150px;
  align-self: flex-end;
`;

export default ConfirmOrderPage;
