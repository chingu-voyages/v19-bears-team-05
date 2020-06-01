import React, { useState, useEffect, useContext } from "react";
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
import { CheckoutButton } from "../../../shared_components/CheckoutButton";

const ConfirmOrderPage = (props) => {
  const { state: ctx, dispatch } = useContext(MenuContext);
  const [userData, setUserData] = useState({});
  function saveOrder(returnedData) {
    fetch("/api/orders/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          { menuItemId: "5ec0180b61361e716d8bf4a2", quantity: 5 },
          { menuItemId: "5ec0180b61361e716d8bf4ba", quantity: 2 },
          { menuItemId: "5ec0180b61361e716d8bf4cf", quantity: 3 },
        ],
        deliveryDetails: {
          email: "kosenchiha@gmail.com",
          name: "hjkhkg",
          phone: "24255222244",
          address: "1/2 flat, 20 Hope Street, Glasqow, UK",
          postcode: "hjkhkg",
        },
        patronId: returnedData.patron._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("returned from createOrder", data));
  }
  function handleSubmit(e) {
    const formDetails = JSON.stringify({
      ...ctx.formState,
      role: ctx.formState.password.length > 0 ? "REGISTER" : "GUEST",
    });
    e.preventDefault();
    if (!ctx.userDetails || !ctx.userDetails.token) {
      fetch("/api/patrons/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formDetails,
      })
        .then((res) => res.json())
        .then(async (data) => {
          await setUserData(data);
          console.log("data from signup", data);
          saveOrder(data);
        })
        .catch((err) => console.log("err", err));
    } else {
      try {
        saveOrder();
      } catch (err) {
        console.log("err", err);
      }
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
        <CheckoutButton
          title="submit order"
          primary
          onClick={(e) => handleSubmit(e)}
        />
      </StyledPageMain>
    </PageLayout>
  );
};

export default ConfirmOrderPage;
