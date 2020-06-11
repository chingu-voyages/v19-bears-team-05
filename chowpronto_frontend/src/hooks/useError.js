import React, { useCallback, useContext } from "react";
import { ErrorsContext } from "../state/ErrorProvider";

export default function useError() {
  const { errors, setErrors } = useContext(ErrorsContext);

  function push(error) {
    setErrors([...errors, error]);
  }

  function pop() {
    const currError = errors[0] || null;
    setErrors(errors.filter((v, i) => i !== 0));
    return currError;
  }

  return { push, pop, get: errors };
}
