import { useContext } from "react";
import UserContext from "../state/UserContext";

function useAuth() {
  const { user, setUser } = useContext(UserContext);
  async function onInit() {
    const storageData = getFromStorage();
    if (storageData && Object.keys(storageData).length > 0) {
      const userDetails = await getUserById(storageData.token);
      setUserDetailsToContext(userDetails);
    }
  }
  function getUser() {
    return user;
  }
  function getUserById(token) {
    // fetch("/api/patron/getUserById", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // });
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Z…EzMX0.Acy2fgFhVudwVCZUaEPtPhKBSZLThMP0QB14N_8pP6I",
      patron: {
        _id: "5ed935717d520e32d44787b1",
        name: "Test Patron",
        emil: "test111@gmail.com",
        phone: "+12-3457-8910",
        address: "123 Flat, 12 Hope Street, Faith City, Wanderland",
        postcode: "W 765 HS",
      },
    };
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
        setToStorage(data);
        setUserDetailsToContext(data);
      });
  }
  function logout() {
    window.localStorage.removeItem("chowpronto");
    setUser({ type: "set_user", userDetails: {} });
  }

  function register(customerDetailsObject) {}
  function setToStorage(dataObj) {
    try {
      window.localStorage.setItem("chowpronto", dataObj.token);
      console.log(window.localStorage.getItem("chowpronto"));
    } catch (err) {
      console.log("err", err);
    }
  }
  function getFromStorage() {
    try {
      const storageData = window.localStorage.getItem("chowpronto");
      return storageData ? storageData : {};
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
