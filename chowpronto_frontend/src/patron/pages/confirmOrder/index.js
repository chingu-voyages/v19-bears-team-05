<<<<<<< HEAD
import React, { useContext, useState } from "react";
=======
import React from "react";
>>>>>>> master
import { PageLayout } from "../../components/PageLayout";
import { StyledSidebar } from "../../components/StyledSidebar";
import { StyledPageMain } from "../../components/StyledPageMain";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import UserDetailsForm from "../../components/UserDetailsForm";
import { CheckoutButton } from "../../../shared_components/CheckoutButton";
import useCheckout from "../../../hooks/useCheckout";
import { useHistory } from "react-router-dom";
import { MenuContext } from "../../../../src/state/MenuContext";

const ConfirmOrderPage = (props) => {
  const { checkout } = useCheckout();
  const history = useHistory();
  let { state: ctx } = useContext(MenuContext);
  const [errMsg, setErrMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, postcode, address, phone } = ctx.formState;
    if (ctx.basketItems.length === 0) {
      setErrMsg("Your basket is empty!");
    } else if (
      name.length === 0 ||
      email.length === 0 ||
      postcode.length === 0 ||
      address.length === 0 ||
      phone.length === 0
    ) {
      setErrMsg("Please, fill in all fields");
    } else {
      checkout();
      history.push("/orderConfirmation");
    }
  }
  return (
    <PageLayout>
      <StyledSidebar style={{ flex: 1.5 }}>
        <OrderDetails />
        <Login />
      </StyledSidebar>
      <StyledPageMain>
        {errMsg.length > 0 && <p style={{ color: "red" }}>{errMsg}</p>}
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
