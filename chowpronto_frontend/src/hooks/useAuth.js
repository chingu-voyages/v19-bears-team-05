import { useContext } from "react";
import { UserContext } from "../state/UserContext";

function useAuth() {
  const { user: context, setUser: setContext } = useContext(UserContext);
  function getUser() {
    // return context;
  }

  function initialMount() {
    const storageData = getFromStorage();
    setUserDetailsToContext(storageData);
  }
  function login(email, password) {
    const credentials = JSON.stringify({ email, password });
    fetch("/api/patrons/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: credentials,
    })
      .then((res) => res.json())
      .then((data) => {
        // setUser(data);
      });
  }
  function logout() {
    window.localStorage.removeItem("chowpronto");
  }

  function register(customerDetailsObject) {}
  function setToStorage(dataObj) {
    try {
      window.localStorage.setItem("chowpronto", JSON.stringify(dataObj));
    } catch (err) {
      console.log("err", err);
    }
  }
  function getFromStorage() {
    try {
      const storageData = window.localStorage.getItem("chowpronto");
      return storageData ? JSON.parse(storageData) : {};
    } catch (err) {
      console.log("err", err);
    }
  }
  function setUserDetailsToContext(userDetails) {
    setContext({ type: "set_user", userDetails });
    console.log("context", context);
  }
  return { getUser, initialMount, login, logout, register };
}

export default useAuth;
