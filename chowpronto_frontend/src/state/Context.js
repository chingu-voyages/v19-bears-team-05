import React, { useReducer } from "react";
import { MenuContext } from "./MenuContext";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import UserProvider from "./UserProvider";
import ErrorProvider from "./ErrorProvider";

export default function Context(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      <UserProvider {...props}>
        <ErrorProvider>{props.children}</ErrorProvider>
      </UserProvider>
    </MenuContext.Provider>
  );
}
