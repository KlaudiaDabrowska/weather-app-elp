import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "../../styles/App.styles";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
import { MainView } from "../mainView/MainView";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../config/QueryClient";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Wrapper />
          <MainView />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
