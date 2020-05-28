import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./patron/pages/menu";
import ConfirmOrderPage from "./patron/pages/confirmOrder";
import RegisterPage from "./patron/pages/register";
import LandingPage from "./patron/pages/landing";
import SettingsPage from "./patron/pages/settings";
import DeliverySelect from "./patron/components/DeliverySelect";
import Theme from "./style/Theme";
function App() {
  return (
    <Theme>
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
            <Route path="/settings">
              <SettingsPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Theme>
  );
}

export default App;
