import React from "react";
import ReactDOM from "react-dom";
import ChowButton from "../ChowButton";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../style/global";

test("chowbutton renders", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ChowButton title="test button" />
    </ThemeProvider>,
    container
  );
  expect(container.textContent).toMatch("test button");
  expect(container.innerHTML).toMatch("<button");
});
