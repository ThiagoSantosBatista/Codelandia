import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStorage} from "./components/GlobalContext";

function App() {
    return (
        <GlobalStorage>
            <Header />
            <Main />
        </GlobalStorage>
    );
}

export default App;
