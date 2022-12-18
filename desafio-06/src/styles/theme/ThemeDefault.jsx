import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        blue: "#0072D2",
        white: "#ffffff",
        dark: "#131318",
        blackBg: "rgba(0,0,0,.7)",
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
