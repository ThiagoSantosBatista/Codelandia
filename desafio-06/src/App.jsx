import Main from "./components/Main";
import GlobalStyle from "./styles/GlobalStyle";
import ThemeDefault from "./styles/theme/ThemeDefault";
import { GlobalStorage } from "./components/GlobalContext";

function App() {
    return (
        <ThemeDefault>
            <GlobalStyle />
            <GlobalStorage>
                <Main />
            </GlobalStorage>
        </ThemeDefault>
    );
}

export default App;
