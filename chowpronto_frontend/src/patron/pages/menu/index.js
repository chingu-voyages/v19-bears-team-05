import React from "react";
import "./menu.css";
import MenuSidebar from "./components/MenuSidebar";
import MenuMain from "./components/MenuMain";
import { useLocation } from "react-router-dom";
import LoginModal from "../../../shared_components/LoginModal";
import DeliverySelect from "../../components/DeliverySelect";
import { PageLayout } from "../../components/PageLayout";

const MenuPage = (props) => {
  const location = useLocation();
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
