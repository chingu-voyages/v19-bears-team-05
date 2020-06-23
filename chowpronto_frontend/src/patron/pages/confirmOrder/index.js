import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
import useAuth from "../../../hooks/useAuth";
import Logo from "../../../shared_components/Logo";

const ConfirmOrderPage = (props) => {
  const { checkout } = useCheckout();
  const history = useHistory();
  let { state: ctx } = useContext(MenuContext);
  const [errMsg, setErrMsg] = useState("");
  const { getUser, logout } = useAuth();
  const user = getUser();

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

const UserBanner = styled.div`
  margin-bottom: ${({ theme }) => theme.mg600};
  font-size: ${({ theme }) => theme.fz300};
`;

export default ConfirmOrderPage;
