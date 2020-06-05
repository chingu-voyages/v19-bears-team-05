import React, { useContext, useEffect } from "react";
import useAuth from "./useAuth";
import UserContext from "../state/UserContext";

export default function useOnInitialisation() {
  const context = useContext(UserContext);
  useEffect(() => {
    console.log("context", context);
  }, [context]);
  function initialise() {}
  return initialise;
}
