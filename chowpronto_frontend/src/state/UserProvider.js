import React, { useReducer } from "react";
import UserContext from "./UserContext";

export default function UserProvider(props) {
  const [user, setUser] = useReducer(reducer, {});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "set_user":
      return { ...action.userDetails };
    default:
      throw new Error();
  }
}
