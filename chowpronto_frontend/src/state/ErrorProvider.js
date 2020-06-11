import React, { useState } from "react";

export const ErrorsContext = new React.createContext({
  errors: [],
  setErrors: () => {},
});

export default function ErrorProvider(props) {
  const [errors, setErrors] = useState([]);
  console.log("errors", errors);
  return (
    <ErrorsContext.Provider value={{ errors, setErrors }}>
      {props.children}
    </ErrorsContext.Provider>
  );
}
