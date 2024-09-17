import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";

import {CompanyInfo} from "components/CompanyInfo/CompanyInfo";
import {Footer} from "components/Footer/Footer";
import {Header} from "components/Header/Header";
import {StockAndQuotes} from "components/StockAndQuotes/StockAndQuotes";
import {RootState} from "store/store";

import "styles/globals.scss";

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CompanyInfo />
      <StockAndQuotes />
      <Footer />
    </ThemeProvider>
  );
};
