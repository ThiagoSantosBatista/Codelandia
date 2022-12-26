import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black600: "#0C0C0C",
    black400: "#737373",
    white: "#F9F9F9",
    gray: "#EBEBEB",
    blue: "#3772FF",
  },
  font: {
    h1: "4.8rem",
    h2: "4rem",
    h3: "2.4rem",
    p1: "1.4rem",
    p2: "1.6rem",
    p3: "2.4rem",
    p4: "3.2rem",
    btn: "1.4rem",
  },
};

interface Props {
  children: React.ReactNode;
}

const LightTheme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LightTheme;
