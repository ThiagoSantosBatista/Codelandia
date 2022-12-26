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
};

interface Props {
  children: React.ReactNode;
}

const LightTheme = ({ children }: Props) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default LightTheme
