import React, { useReducer } from "react";
import "./menu.css";
import MenuSidebar from "./components/MenuSidebar";
import MenuMain from "./components/MenuMain";
import { useLocation } from "react-router-dom";
import LoginModal from "../../../shared_components/LoginModal";
import DeliverySelect from "../../components/DeliverySelect";
import { MenuContext } from "../../../state/MenuContext";
import { reducer } from "../../../state/reducer";
import { initialState } from "../../../state/initialState";
import { PageLayout } from "../../components/PageLayout";

const MenuPage = (props) => {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      <PageLayout>
        <MenuSidebar {...location} />
        <MenuMain />
        {location.search === "?loginModal=true" && <LoginModal />}
        {location.search === "?deliverySelect=true" && <DeliverySelect />}
      </PageLayout>
    </MenuContext.Provider>
  );
};

export default MenuPage;
