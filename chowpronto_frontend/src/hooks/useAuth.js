import { useContext } from "react";
import UserContext from "../state/UserContext";

function useAuth() {
  const { user, setUser } = useContext(UserContext);
  async function onInit() {
    const storageData = getFromStorage();
    if (storageData && storageData.length > 0) {
      const userDetails = await getUserById(storageData.token);
      console.log("userDetails", userDetails);
      setUserDetailsToContext({ ...userDetails, token: storageData });
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
    }).then((res) => res.json());
    // .then((data) => console.log("data from getUserData", data));
    // return {
    //   patron: {
    //     _id: "5ed935717d520e32d44787b1",
    //     name: "Test Patron",
    //     emil: "test111@gmail.com",
    //     phone: "+12-3457-8910",
    //     address: "123 Flat, 12 Hope Street, Faith City, Wanderland",
    //     postcode: "W 765 HS",
    //   },
    // };
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
        setTokenToStorage({ token: data.token });
        setUserDetailsToContext({ data });
      });
  }
  function logout() {
    window.localStorage.removeItem("chowpronto");
    setUser({ type: "set_user", userDetails: {} });
  }

  async function register(customerDetailsObject) {
    console.log("customerDetailsObject", customerDetailsObject);
    let serverObject =
      customerDetailsObject.password.length > 0
        ? { ...customerDetailsObject, role: "REGISTER" }
        : { ...customerDetailsObject, role: "GUEST" };
    return fetch("/api/patrons/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: serverObject,
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
  function getFromStorage() {
    try {
      const storageData = window.localStorage.getItem("chowpronto");
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
