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
    h1: "clamp(2.6rem, 2.5vw, 4.8rem)",
    h2: "clamp(2.4rem, 2.08vw, 4rem)",
    h3: "clamp(2.2rem, 1.25vw, 2.4rem)",
    p1: "1.4rem",
    p2: "clamp(1.4rem, 0.83vw, 1.6rem)",
    p3: "clamp(1.4rem, 2.5vw, 2.4rem)",
    p4: "clamp(2.4rem, 1.67vw, 3.2rem)",
    btn: "clamp(1.2rem, 0.73vw, 1.4rem)",
    nav: "clamp(1.2rem, 0.94vw, 1.8rem)",
  },
};

interface Props {
  children: React.ReactNode;
}

const LightTheme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LightTheme;
