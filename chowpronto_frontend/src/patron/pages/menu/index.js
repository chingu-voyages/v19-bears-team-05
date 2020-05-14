import React from "react";
import "./menu.css";
import MenuSidebar from "./components/MenuSidebar";
import MenuMain from "./components/MenuMain";

const MenuPage = (props) => {
  return (
    <div className="dashboard-page">
      <MenuSidebar />
      <MenuMain />
    </div>
  );
};

export default MenuPage;
