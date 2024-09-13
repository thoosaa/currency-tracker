import {useSelector} from "react-redux";

import {RootState} from "store/store";
import {Header} from "components/Header/Header";
import {StockAndQuotes} from "components/StockAndQuotes/StockAndQuotes";
import {ThemeProvider} from "styled-components";

import "styles/globals.scss";

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StockAndQuotes />
    </ThemeProvider>
  );
};
