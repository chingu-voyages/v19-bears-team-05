import React, { useReducer } from "react";
import { MenuContext } from "./MenuContext";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import UserProvider from "./UserProvider";

export default function Context(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      <UserProvider {...props}>{props.children}</UserProvider>
    </MenuContext.Provider>
  );
}
