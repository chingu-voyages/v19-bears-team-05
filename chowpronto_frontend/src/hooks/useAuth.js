function useAuth() {
  // takes no arguments and returns 3 functions, get current user (getUser()), login & logout
  const fakeGuest = {
    email: "fakeguest@gmail.com",
    name: "New Patron",
    password: "",
    phone: "+12-3457-8910",
    address: "123 Flat, 12 Hope Street, Faith City, Wanderland",
    postcode: "W 765 HS",
    role: "GUEST",
  };
  const fakeRegister = {
    email: "fakeguest@gmail.com",
    name: "New Patron",
    password: "",
    phone: "+12-3457-8910",
    address: "123 Flat, 12 Hope Street, Faith City, Wanderland",
    postcode: "W 765 HS",
    role: "GUEST",
  };
  let user = undefined;
  const getUser = async () =>
    new Promise((res, rej) => setTimeout(() => res(user)), 1000);
  const login = async (email, password) =>
    new Promise((res, rej) =>
      setTimeout(() => res({ name: "Kenny Loggins", id: "232323" }))
    );
  const logout = async () =>
    setTimeout(() => {
      user = null;
      return true;
    }, 200);
  function setToStorage(dataObj) {
    // if(window)
  }
  return { getUser, login, logout };
}

export default useAuth;
