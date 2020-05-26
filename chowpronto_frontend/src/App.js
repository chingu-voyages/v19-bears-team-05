import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./patron/pages/menu";
import ConfirmOrderPage from "./patron/pages/confirmOrder";
import RegisterPage from "./patron/pages/register";
import LandingPage from "./patron/pages/landing";
import DeliverySelect from "./patron/components/DeliverySelect";
import Theme from "./style/Theme";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initialState";
import { MenuContext } from "./state/MenuContext";
import Context from "./state/Context";

function App() {
  return (
    <Theme>
      <Context>
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
      </Context>
    </Theme>
  );
}

export default App;
