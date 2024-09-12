import {useSelector} from "react-redux";

import {RootState} from "store/store";
import {Header} from "components/Header/Header";
import {ThemeProvider} from "styled-components";

import "styles/globals.scss";

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};
