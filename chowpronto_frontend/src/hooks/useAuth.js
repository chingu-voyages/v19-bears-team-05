function useAuth() {
  // takes no arguments and returns 3 functions, get current user (getUser()), login & logout
  let user = undefined;
  const getUser = () => {
    return getFromStorage();
  };
  function setUser(dataObj) {
    setToStorage(dataObj);
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
      .then((data) => setToStorage(data));
  }
  function logout() {
    setToStorage({});
  }
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
  return { getUser, setUser, login, logout };
}

export default useAuth;
