import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function Themer({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Themer;
