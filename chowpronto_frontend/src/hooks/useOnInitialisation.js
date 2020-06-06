import useAuth from "./useAuth";

export default function useOnInitialisation() {
  const { onInit } = useAuth();

  function initialise() {
    onInit();
    // set the stuff onto a UserContext
  }
  return initialise;
}
