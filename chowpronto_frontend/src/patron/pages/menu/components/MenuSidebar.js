import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../../../shared_components/Logo";
import Filter from "../../../../shared_components/Filter";
import Search from "../../../../shared_components/Search";
import ChowButton from "../../../../shared_components/ChowButton";
import DeliveryTime from "../../../components/DeliveryTime";
import useBasket from "../../../../hooks/useBasket";
import useAuth from "../../../../hooks/useAuth";
import DeliveryAddress from "../../../components/DeliveryAddress";
import BasketSummary from "./BasketSummary";

const MenuSidebar = (props) => {
  const [basket] = useBasket();
  const { getUser, logout } = useAuth();
  const [user, setUser] = useState(null);
  const basketQuantity = basket.basketItems.reduce(
    (acc, val) => acc + val.quantity,
    0
  );
  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);
  return (
    <StyledMenuHeader>
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

      <ChowButton
        title="Proceed To Checkout"
        onClick={() => console.log("Place Order Pressed")}
        primary
        elevated
        style={{ position: "fixed", border: "solid red 2px" }}
      />
    </StyledMenuHeader>
  );
};

export const StyledMenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  border-right: ${({ theme }) => theme.bd200u};
  padding: ${({ theme }) => theme.pd900};
`;

const UserBanner = styled.div`
  margin-bottom: ${({ theme }) => theme.mg600};
  font-size: ${({ theme }) => theme.fz300};
`;

export default MenuSidebar;
