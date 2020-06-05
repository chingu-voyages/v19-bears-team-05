import React, { useState, useReducer } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useReducer(reducer, {});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "set_user":
      console.log("action.details", action.details);
      return { ...state, ...action.userDetails };
    default:
      throw new Error();
  }
}
