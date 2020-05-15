import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../shared_components/Logo";
import Filter from "../../../../shared_components/Filter";
import Search from "../../../../shared_components/Search";
import ChowButton from "../../../../shared_components/ChowButton";
import DeliverySelector from "../../../components/DeliverySelector";
import useBasket from "../../../../hooks/useBasket";
import useAuth from "../../../../hooks/useAuth";

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
    <div className="menu-sidebar">
      <div className="welcome">
        {user ? (
          <span>
            Welcome back <span>{user.name}</span>{" "}
            <Link
              to={(location) => {
                logout();
                return `${location.pathname}#login`;
              }}
            >
              Not me?
            </Link>
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <Logo />
      <DeliverySelector />
      <Search />
      <Filter />
      <ChowButton
        title={`Basket ${basketQuantity} item${
          basketQuantity !== 1 ? "s" : ""
        }`}
        onClick={() => console.log("Button Pressed")}
      />
      <ChowButton
        title="Place Order >"
        onClick={() => console.log("Place Order Pressed")}
      />
    </div>
  );
};

export default MenuSidebar;
