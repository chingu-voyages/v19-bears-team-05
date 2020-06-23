import React, { useContext, useState } from "react";
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
import Logo from "../../../shared_components/Logo";

const ConfirmOrderPage = (props) => {
  const { checkout } = useCheckout();
  const history = useHistory();
  let { state: ctx } = useContext(MenuContext);
  const [errMsg, setErrMsg] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      email,
      postcode,
      address,
      phone,
      password,
      passwordConfirm,
    } = ctx.formState;
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
    } else if (password !== passwordConfirm) {
      setErrMsg("Password should match");
    } else if (!/^\+\d{2}\W\d{4}\W\d{4}$/.test(phone)) {
      setErrMsg("Phone number should be in the format +12 3456 7890");
    } else {
      checkout();
      history.push("/orderConfirmation");
    }
  }

  return (
    <PageLayout>
      <StyledSidebar>
        <Logo />
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
