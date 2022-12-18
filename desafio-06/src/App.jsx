import Main from "./components/Main"
import GlobalStyle from "./styles/GlobalStyle"
import ThemeDefault from "./styles/theme/ThemeDefault"

function App() {
  return (
    <ThemeDefault>
      <GlobalStyle />
      <Main />
    </ThemeDefault>
  )
}

export default App
