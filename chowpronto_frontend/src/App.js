import React, { useEffect, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./patron/pages/menu";
import ConfirmOrderPage from "./patron/pages/confirmOrder";
import RegisterPage from "./patron/pages/register";
import LandingPage from "./patron/pages/landing";

import SettingsPage from "./patron/pages/settings";
import DeliverySelect from "./patron/components/DeliverySelect";

import Theme from "./style/Theme";
import Context from "./state/Context";
import LoginPage from "./patron/pages/login";
import useOnInitialisation from "./hooks/useOnInitialisation";

function App() {
  // function to run only on initial render of site
  return (
    <Theme>
      <Context>
        <div className="App">
          <Router>
            <WithData>
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
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/settings">
                  <SettingsPage />
                </Route>
              </Switch>
            </WithData>
          </Router>
        </div>
      </Context>
    </Theme>
  );
}

function WithData({ children }) {
  const initialise = useOnInitialisation();
  useEffect(() => {
    initialise();
  }, []);
  return <Fragment>{children}</Fragment>;
}

export default App;
