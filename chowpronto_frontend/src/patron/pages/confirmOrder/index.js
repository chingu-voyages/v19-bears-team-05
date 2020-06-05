import React, { useState, useContext } from "react";
import { PageLayout } from "../../components/PageLayout";
import { StyledSidebar } from "../../components/StyledSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import UserDetailsForm from "../../components/UserDetailsForm";
import { MenuContext } from "../../../state/MenuContext";
import { CheckoutButton } from "../../../shared_components/CheckoutButton";

const saveOrder = (token, patronId, deliveryDetails, basket) => {
  return fetch("/api/orders/order", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: basket,
      deliveryDetails,
      patronId,
    }),
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((order) => console.log("returned from createOrder", order));
};

const signupNewPatron = (formDetails) => {
  return fetch("/api/patrons/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formDetails,
  }).then((res) => {
    console.log("in first then");
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};

const ConfirmOrderPage = (props) => {
  const { state: ctx } = useContext(MenuContext);

  function handleSubmit(e) {
    const formDetails = JSON.stringify({
      ...ctx.formState,
      role: ctx.formState.password.length > 0 ? "REGISTER" : "GUEST",
    });
    e.preventDefault();
    if (!ctx.userDetails || !ctx.userDetails.token) {
      signupNewPatron(formDetails)
        .then((data) => {
          /// save token to local storage
          /// save user data somewhere

          const { token, patron } = data;
          const { _id, email, name, phone, address, postcode } = patron;
          const deliveryDetails = {
            email,
            name,
            phone,
            address,
            postcode,
          };

          return saveOrder(token, _id, deliveryDetails, ctx.basketItems);
        })
        .catch((err) => {
          err.json().then((json) => {
            console.log(json.errorMsg);
          });
        });
    } else {
      try {
        saveOrder();
      } catch (err) {
        alert(err);
        console.log("errSaveOrder", err);
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
