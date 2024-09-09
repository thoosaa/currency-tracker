import {Header} from "components/Header/Header";
import "styles/globals.scss";
import {Provider, useSelector} from "react-redux";
import store, {RootState} from "store/store";
import {ThemeProvider} from "styled-components";
import {dark} from "./theme";

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};
