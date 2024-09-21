import {Chart, registerables} from "chart.js";
import {CandlestickController, CandlestickElement} from "chartjs-chart-financial";
import {ErrorBoundary} from "react-error-boundary";
import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";

import {AppRouting} from "components/AppRouting/AppRouting";
import {Fallback} from "components/Fallback/Fallback";
import {RootState} from "store/store";

import "chartjs-adapter-date-fns";

// Register the necessary components
Chart.register(...registerables, CandlestickController, CandlestickElement);

import "styles/globals.scss";

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <ThemeProvider theme={theme}>
        <AppRouting />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
