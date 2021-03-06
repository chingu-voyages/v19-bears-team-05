import React, { useEffect, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./patron/pages/menu";
import ConfirmOrderPage from "./patron/pages/confirmOrder";
import RegisterPage from "./patron/pages/register";
import LandingPage from "./patron/pages/landing";

import SettingsPage from "./patron/pages/settings";

import Theme from "./style/Theme";
import Context from "./state/Context";
import LoginPage from "./patron/pages/login";
import Error404 from "./patron/pages/error404";
import useOnInitialisation from "./hooks/useOnInitialisation";
import BasketPage from "./patron/pages/basketPage";
import OrderConfirmationPage from "./patron/pages/orderConfirmation";
import Layout from "./style/Layout";

function App() {
  // function to run only on initial render of site
  return (
    <Theme>
      <Context>
        <div className="App">
          <Router>
            <WithData>
              <Layout>
                <Switch>
                  <Route path="/" exact>
                    <LandingPage />
                  </Route>
                  <Route path="/menu">
                    <MenuPage />
                  </Route>
                  <Route path="/basket">
                    <BasketPage />
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
                  <Route path="/orderConfirmation">
                    <OrderConfirmationPage />
                  </Route>
                  <Route path="/">
                    <Error404 />
                  </Route>
                </Switch>
              </Layout>
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
