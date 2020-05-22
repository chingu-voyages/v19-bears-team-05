import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./global";

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Roboto Mono', monospace;
  }
`;

// ----------------------------
// Theme Provider
// ----------------------------

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
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
