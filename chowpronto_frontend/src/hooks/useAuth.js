import { useContext } from "react";
import UserContext from "../state/UserContext";
import useError from "./useError";

function useAuth() {
  const context = useContext(UserContext);
  const user = context?.user;
  const setUser = context?.setUser;
  const error = useError();
  async function onInit() {
    const storageData = await getFromStorage();
    if (storageData && storageData.length > 0) {
      const userDetails = await getUserById(storageData);
      if (userDetails.patron) {
        setUserDetailsToContext({ ...userDetails, token: storageData });
      } else {
        logout();
      }
    }
  }
  function getUser() {
    return user;
  }

  function getUserById(token) {
    return fetch("/api/patrons/patron", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log("err", err));
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
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((data) => {
        setTokenToStorage({ token: data.token });
        setUserDetailsToContext({ token: data.token, patron: data.patron });
      })
      .catch((err) =>
        err.json().then((json) => {
          error.push(json.errorMsg);
        })
      );
  }
  async function logout() {
    await window.localStorage.removeItem("chowpronto");
    setUser({ type: "set_user", userDetails: {} });
  }

  async function register(customerDetailsObject) {
    let serverObject =
      customerDetailsObject.password.length > 0
        ? { ...customerDetailsObject, role: "REGISTER" }
        : { ...customerDetailsObject, role: "GUEST" };
    return fetch("/api/patrons/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serverObject),
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        throw res;
      }
    });
  }

  function setTokenToStorage(dataObj) {
    try {
      window.localStorage.setItem("chowpronto", dataObj.token);
    } catch (err) {
      console.log("err", err);
    }
  }
  async function getFromStorage() {
    try {
      const storageData = await window.localStorage.getItem("chowpronto");
      return storageData ? storageData : "";
    } catch (err) {
      console.log("err", err);
    }
  }
  function setUserDetailsToContext(userDetails) {
    setUser({ type: "set_user", userDetails });
  }
  return {
    getUser,
    onInit,
    login,
    logout,
    register,
  };
}

export default useAuth;
