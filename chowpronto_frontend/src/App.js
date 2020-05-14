import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./patron/pages/menu";
import ConfirmOrderPage from "./patron/pages/confirmOrder";
import RegisterPage from "./patron/pages/register";
import LandingPage from "./patron/pages/landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/confirmOrder">
            <ConfirmOrderPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
