import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        blue: "#0072D2",
        white: "#ffffff",
        dark: "#131318",
        blackMobile: "#19191F",
        blackBg: "rgba(0,0,0,.7)",
        linhaMobile: "rgba(196, 196, 196, 0.08)",
    },
    font: {
        primary: "'B612', sans-serif",
        secondary: "'Open Sans', sans-serif",
    },
};

const ThemeDefault = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeDefault;
