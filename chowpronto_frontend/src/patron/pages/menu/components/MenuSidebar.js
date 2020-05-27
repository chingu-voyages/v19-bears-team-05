import React, { useState, useEffect, useContext } from "react";
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
import useCheckout from "../../../../hooks/useCheckout";
import { MenuContext } from "../../../../state/MenuContext";

const MenuSidebar = (props) => {
  const { getUser, logout } = useAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);
  const { state, dispatch } = useContext(MenuContext);
  const checkout = useCheckout();
  console.log("state", state.basketItems);
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

      <CheckoutButton
        title="Proceed To Checkout"
        onClick={() => checkout(state.basketItems)}
        primary
        elevated
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
