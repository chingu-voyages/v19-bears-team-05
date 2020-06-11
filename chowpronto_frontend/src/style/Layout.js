import React from "react";
import ErrorDialog from "../patron/components/ErrorDialog";

// component to present components irrespective of page location
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ErrorDialog />
      {children}
    </React.Fragment>
  );
}
