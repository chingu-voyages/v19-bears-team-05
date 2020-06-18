import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import UserDetailsForm from "../../../components/UserDetailsForm";
import { MenuContext } from "../../../../state/MenuContext";
import { reducer } from "../../../../state/reducer";
import { initialState } from "../../../../state/initialState";
import UserContext from "../../../../state/UserContext";

test("calls checkout function with user details when submitted", () => {
  const container = document.createElement("div");
  // const [state, dispatch] = useReducer(reducer, initialState);
  const state = initialState;
  const dispatch = () => {};

  ReactDOM.render(
    <MenuContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={{ user: {}, setUser: () => {} }}>
        <UserDetailsForm />
      </UserContext.Provider>
    </MenuContext.Provider>,
    container
  );
  console.log("container", container.innerHTML);
});
