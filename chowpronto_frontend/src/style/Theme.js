import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./global";

// ----------------------------
// Theme Provider
// ----------------------------

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

// ----------------------------
// Example usage
// ----------------------------
//
// const Button = styled.button`
//   ${({ theme }) => css`
//     background: ${theme.primary.bg};
//     color: ${theme.primary.color};
//   `}
// `;
