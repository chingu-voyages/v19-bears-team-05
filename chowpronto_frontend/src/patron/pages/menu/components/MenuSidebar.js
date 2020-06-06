import React from "react";
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

const MenuSidebar = () => {
  const { getUser, logout } = useAuth();
  const user = getUser();
  console.log("user", user);
  return (
    <StyledSidebar>
      <UserBanner>
        {user && Object.keys(user).length > 0 ? (
          <span>
            Welcome back <span>{user.name}</span>{" "}
            <Link
              to={(location) => {
                logout();
                return `${location.pathname}?loginModal=true`;
              }}
              style={{ cursor: "pointer" }}
            >
              Not me?
            </Link>
          </span>
        ) : (
          <Link
            to={(location) => {
              // logout();
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
      <BasketSummary />
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
