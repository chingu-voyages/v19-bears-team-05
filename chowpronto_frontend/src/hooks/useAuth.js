function useAuth() {
  // takes no arguments and returns 3 functions, get current user (getUser()), login & logout
  let user = { name: "Matt", id: "abc123" };
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
  return { getUser, login, logout };
}

export default useAuth;
