import React, { useReducer } from "react";
import "./menu.css";
import MenuSidebar from "./components/MenuSidebar";
import MenuMain from "./components/MenuMain";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import LoginModal from "../../../shared_components/LoginModal";
import DeliverySelect from "../../components/DeliverySelect";
import { MenuContext } from "../../../state/MenuContext";
import { reducer } from "../../../state/reducer";
import { initialState } from "../../../state/initialState";

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

const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
`;

export default MenuPage;
