import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../../../shared_components/Logo";
import Filter from "../../../../shared_components/Filter";
import Search from "../../../../shared_components/Search";
import DeliveryTime from "../../../components/DeliveryTime";
import useAuth from "../../../../hooks/useAuth";
import DeliveryAddress from "../../../components/DeliveryAddress";
import BasketSummary from "./BasketSummary";
import { StyledSidebar } from "../../../components/StyledSidebar";
import { CheckoutButton } from "../../../../shared_components/CheckoutButton";
import { MenuContext } from "../../../../state/MenuContext";

const MenuSidebar = () => {
  const { getUser, logout } = useAuth();
  const user = getUser();
  const { state, dispatch } = useContext(MenuContext);
  console.log("state", state);
  useEffect(() => {
    console.log("firing useEffect");
    if (user.patron && state.formState.postcode.length < 1) {
      console.log("Calling");
      dispatch({
        type: "set_delivery_postcode",
        postcode: user.patron.postcode,
      });
    }
  }, [user, state]);
  return (
    <StyledSidebar>
      <UserBanner>
        {user && Object.keys(user).length > 0 ? (
          <span>
            Welcome back <span>{user.patron.name}</span>{" "}
            <Link
              onClick={() => {
                logout();
              }}
              to={(location) => {
                return `${location.pathname}?loginModal=true`;
              }}
              style={{ cursor: "pointer" }}
              // todo Figure out why the message is not updating on logout
            >
              Not me?
            </Link>
          </span>
        ) : (
          <Link
            to={(location) => {
              return `${location.pathname}?loginModal=true`;
            }}
            style={{ cursor: "pointer" }}
          >
            Login
          </Link>
        )}
      </UserBanner>
      <Logo />
      <Link
        to={(location) => {
          return `${location.pathname}?deliverySelect=true`;
        }}
      >
        <DeliveryAddress />
      </Link>
      <Link
        to={(location) => {
          return `${location.pathname}?deliverySelect=true`;
        }}
      >
        <DeliveryTime />
      </Link>
      <Search value="" onChange={() => console.log("Search bar change")} />
      <Filter />
      <Link to="/basket">
        <BasketSummary />
      </Link>
      <Link
        to={(location) => {
          return `/confirmOrder`;
        }}
      >
        <CheckoutButton title="Proceed To Checkout" primary elevated />
      </Link>
    </StyledSidebar>
  );
};

const UserBanner = styled.div`
  margin-bottom: ${({ theme }) => theme.mg600};
  font-size: ${({ theme }) => theme.fz300};
`;

export default MenuSidebar;
