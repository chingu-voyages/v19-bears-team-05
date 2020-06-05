import React, { useReducer, useContext } from "react";
import UserContext from "./UserContext";

export default function UserProvider(props) {
  console.log("props", props);
  const [user, setUser] = useReducer(reducer, {});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "say_hi":
      console.log("Well Hi!");
      return state;
    case "set_user":
      console.log("action.details", action.details);
      return { ...state, ...action.userDetails };
    default:
      throw new Error();
  }
}
