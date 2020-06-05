import React, { useContext, useEffect } from "react";
import useAuth from "./useAuth";
import UserContext from "../state/UserContext";

export default function useOnInitialisation() {
  const { user, setUser } = useContext(UserContext);
  const { onInit } = useAuth();

  function initialise() {
    onInit();
    // set the stuff onto a UserContext
  }
  return initialise;
}
