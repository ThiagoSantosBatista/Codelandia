import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import LightTheme from "./styles/themes/light";

function App() {
  return (
    <>
      <LightTheme>
        <GlobalStyle />
        <Home />
      </LightTheme>
    </>
  );
}

export default App;
