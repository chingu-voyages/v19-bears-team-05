import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./patron/pages/menu";
import ConfirmOrderPage from "./patron/pages/confirmOrder";
import RegisterPage from "./patron/pages/register";
import LandingPage from "./patron/pages/landing";
import Theme from "./style/Theme";
import Context from "./state/Context";
import LoginPage from "./patron/pages/login";
import useOnInitialisation from "./hooks/useOnInitialisation";

function App() {
  // function to run only on initial render of site
  const [user, setUser] = useState(window.localStorage.getItem("chowpronto"));
  // const initialise = useOnInitialisation();
  useEffect(() => {
    try {
      setUser(window.localStorage.getItem("chowpronto"));
    } catch (err) {
      console.log("err", err);
    }
  }, []);
  return (
    <Theme>
      <Context user={user}>
        <div className="App">
          <Router>
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
            </Switch>
          </Router>
        </div>
      </Context>
    </Theme>
  );
}

export default App;
