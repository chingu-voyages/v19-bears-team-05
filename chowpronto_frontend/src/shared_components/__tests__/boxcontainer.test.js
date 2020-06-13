import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style/global";
import BoxContainer from "../BoxContainer";

test("boxcontainer renders", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <BoxContainer active>Some text</BoxContainer>
    </ThemeProvider>,
    container
  );
  expect(container.textContent).toMatch("Some text");
  expect(container.innerHTML).toMatch("<div");
});
