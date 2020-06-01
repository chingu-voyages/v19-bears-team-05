import React, { useContext, useEffect } from "react";
import "./menu.css";
import MenuSidebar from "./components/MenuSidebar";
import MenuMain from "./components/MenuMain";
import { useLocation } from "react-router-dom";
import LoginModal from "../../../shared_components/LoginModal";
import DeliverySelect from "../../components/DeliverySelect";
import { PageLayout } from "../../components/PageLayout";
import useAuth from "../../../hooks/useAuth";
import { MenuContext } from "../../../state/MenuContext";

const MenuPage = (props) => {
  const location = useLocation();
  const { state, dispatch } = useContext(MenuContext);
  const { getUser } = useAuth();
  useEffect(() => {
    const userDetails = getUser();
    dispatch({ type: "set_user", userDetails });
  }, []);
  return (
    <PageLayout>
      <MenuSidebar {...location} />
      <MenuMain />
      {location.search === "?loginModal=true" && <LoginModal />}
      {location.search === "?deliverySelect=true" && <DeliverySelect />}
    </PageLayout>
  );
};

export default MenuPage;
