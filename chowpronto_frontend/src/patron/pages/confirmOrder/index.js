import React, { useContext } from "react";
import { PageLayout } from "../../components/PageLayout";
import { StyledSidebar } from "../../components/StyledSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import UserDetailsForm from "../../components/UserDetailsForm";
import { CheckoutButton } from "../../../shared_components/CheckoutButton";
import useCheckout from "../../../hooks/useCheckout";
import { useHistory } from "react-router-dom";

const ConfirmOrderPage = (props) => {
  const { checkout } = useCheckout();
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const result = checkout();
    console.log("result", result);
    history.push("/orderConfirmation");
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
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </StyledPageMain>
    </PageLayout>
  );
};

export default ConfirmOrderPage;
