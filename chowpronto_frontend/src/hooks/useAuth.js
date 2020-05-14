import { useCallback } from "react";

function useAuth() {
  // takes no arguments and returns 3 functions, get current user (getUser()), login & logout
  let user = { name: "Matt", id: "abc123" };
  const getUser = async () => new Promise((res, rej) => res(user));
  const login = async (name, password) =>
    setTimeout(() => ({ name, id: "xyz321" }), 200);
  const logout = async () =>
    setTimeout(() => {
      user = null;
      return true;
    }, 200);
  return { getUser, login, logout };
}

export default useAuth;
