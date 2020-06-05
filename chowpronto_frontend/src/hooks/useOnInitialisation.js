import React from "react";
import useAuth from "./useAuth";

export default function useOnInitialisation() {
  const { initialMount } = useAuth();
  function initialise() {
    initialMount();
  }
  return initialise;
}
