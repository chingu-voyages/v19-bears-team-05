import React, { useState, useEffect, useContext } from "react";
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

const MenuSidebar = (props) => {
  // const { getUser, logout } = useAuth();
  const { state, dispatch } = useContext(MenuContext);
  return (
    <StyledSidebar>
      <UserBanner>
        {state.userDetails && state.userDetails.token ? (
          <span>
            Welcome back <span>{state.userDetails.patron.name}</span>{" "}
            <Link
              to={(location) => {
                // logout();
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
      <DeliveryAddress
        onChange={() => console.log("go to delivery address change")}
      />
      <DeliveryTime
        onChange={() => console.log("go to delivery time change")}
      />
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
