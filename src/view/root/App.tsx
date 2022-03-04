import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "../../styles/App.styles";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
import { MainView } from "../mainView/MainView";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper />
        <MainView />
      </ThemeProvider>
    </>
  );
};
export default App;
