import React, { useState, useContext } from "react";
import { PageLayout } from "../../components/PageLayout";
import { StyledSidebar } from "../../components/StyledSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import UserDetailsForm from "../../components/UserDetailsForm";
import { MenuContext } from "../../../state/MenuContext";
import { CheckoutButton } from "../../../shared_components/CheckoutButton";

const ConfirmOrderPage = (props) => {
  const { state: ctx } = useContext(MenuContext);
  console.log(ctx);
  const [userData, setUserData] = useState({});

  function saveOrder(data, patronId, deliveryDetails, basket) {
    console.log("Token", data.token);

    fetch("/api/orders/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: basket,
        deliveryDetails,
        patronId,
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
      console.log("in signup, formDetails", formDetails);
      fetch("/api/patrons/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formDetails,
      })
        .then((res) => {
          console.log("in first then");
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          } else {
            throw res;
          }
        })
        .then(async (data) => {
          console.log("in second then", data);
          await setUserData(data);
          console.log("data", data);

          const deliveryDetails = {
            email: data.patron.email,
            name: data.patron.name,
            phone: data.patron.phone,
            address: data.patron.address,
            postcode: data.patron.postcode,
          };
          const patronId = data.patron._id;
          const token = data.token;
          saveOrder(token, patronId, deliveryDetails, ctx.basketItems);
        })
        .catch((err) => {
          console.log("inErr", err);
          err.json().then((json) => {
            console.log(json.errMsg);
            alert(json.errMsg);
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
