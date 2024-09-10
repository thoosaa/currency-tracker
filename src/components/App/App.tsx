import {Header} from "components/Header/Header";
import "styles/globals.scss";
import {useSelector} from "react-redux";
import {RootState} from "store/store";
import {ThemeProvider} from "styled-components";
import {Footer} from "components/Footer/Footer";

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  );
};
