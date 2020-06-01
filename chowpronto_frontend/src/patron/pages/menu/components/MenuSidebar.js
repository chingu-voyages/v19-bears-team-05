import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../../../shared_components/Logo";
import Filter from "../../../../shared_components/Filter";
import Search from "../../../../shared_components/Search";
import ChowButton from "../../../../shared_components/ChowButton";
import DeliveryTime from "../../../components/DeliveryTime";
import useAuth from "../../../../hooks/useAuth";
import DeliveryAddress from "../../../components/DeliveryAddress";
import BasketSummary from "./BasketSummary";
import { StyledSidebar } from "../../../components/StyledSidebar";

const MenuSidebar = (props) => {
  const { getUser, logout } = useAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getUser());
  }, []);
  console.log("user", user);
  // const { state, dispatch } = useContext(MenuContext);
  return (
    <StyledSidebar>
      <UserBanner>
        {user ? (
          <span>
            Welcome back <span>{user.name}</span>{" "}
            <Link
              to={(location) => {
                logout();
                return `${location.pathname}?loginModal=true`;
              }}
            >
              Not me?
            </Link>
          </span>
        ) : (
          <Link to="/login">Login</Link>
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
      <BasketSummary />
      <Link
        to={(location) => {
          logout();
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

const CheckoutButton = styled(ChowButton)`
  position: fixed;
  bottom: ${({ theme }) => theme.pd900};
  right: ${({ theme }) => theme.pd900};
  font-size: ${({ theme }) => theme.fz400};
  padding: ${({ theme }) => theme.pd600};
  backdrop-filter: blur(2px);
  z-index: 10;
  opacity: 0.9;
`;

export default MenuSidebar;
