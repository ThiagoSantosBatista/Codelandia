import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStorage} from "./components/GlobalContext";

function App() {
    const [modal, setModal] = React.useState(false);

    return (
        <GlobalStorage>
            <Header />
            <Main />
        </GlobalStorage>
    );
}

export default App;
