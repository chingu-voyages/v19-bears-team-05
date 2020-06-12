import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import UserDetailsForm from "../../../components/UserDetailsForm";
import { MenuContext } from "../../../../state/MenuContext";
import { reducer } from "../../../../state/reducer";
import { initialState } from "../../../../state/initialState";

test("calls checkout function with user details when submitted", () => {
  const container = document.createElement("div");
  const [state, dispatch] = useReducer(reducer, initialState);
  ReactDOM.render(
    <MenuContext.Provider value={{ state, dispatch }}>
      <UserDetailsForm />
    </MenuContext.Provider>,
    container
  );
  console.log("container", container.innerHTML);
  console.log("Hey");
});
