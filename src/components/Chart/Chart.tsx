import axios from "axios";
import {Chart as ChartJS} from "chart.js";
import React, {Component} from "react";
import {Chart} from "react-chartjs-2";

import ChartModal from "components/ChartModal/ChartModal";
import InfoModal from "components/InfoModal/InfoModal";
import {RATE_URL} from "constants/apiroutes";
import {Observer} from "utils/Observer";

import {options} from "./chartconfig";
import {CandlestickChartProps, CandlestickChartState, Trade, TradeApi} from "./types";

import "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

class CandlestickChart extends Component<CandlestickChartProps, CandlestickChartState> {
  observer = new Observer();

  constructor(props: CandlestickChartProps) {
    super(props);
    this.state = {
      history: [],
      currentTrade: undefined,
      isOpen: false,
      isOpenNotify: false,
      isLoading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.observer.subscribe(() => this.setState({isOpenNotify: true}));
  }

  componentDidUpdate(
    prevProps: Readonly<CandlestickChartProps>,
    prevState: Readonly<CandlestickChartState>,
  ) {
    if (prevState.history !== this.state.history) {
      this.observer.notify();
    }

    if (prevProps.fromDate !== this.props.fromDate || prevProps.toDate !== this.props.toDate) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    try {
      this.setState({isLoading: true});
      const response = await axios.get(RATE_URL, {
        headers: {
          "X-CoinAPI-Key": process.env.REACT_APP_API_KEY,
        },
        params: {
          period_id: "1DAY",
          time_start: `${this.props.fromDate}T00:00:00`,
          time_end: `${this.props.toDate}T00:00:00`,
        },
      });

      const tradeInfo = response.data.map(
        ({time_period_start, price_high, price_low, price_open, price_close}: TradeApi) => ({
          x: new Date(time_period_start),
          o: price_open,
          h: price_high,
          l: price_low,
          c: price_close,
        }),
      );

      this.setState({history: tradeInfo});
    } catch {
      this.setState({error: true});
    } finally {
      this.setState({isLoading: false});
    }
  };

  handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const chart = ChartJS.getChart(event.currentTarget as HTMLCanvasElement);

    if (!chart) {
      return;
    }

    const points = chart.getElementsAtEventForMode(
      event.nativeEvent,
      "nearest",
      {intersect: true},
      false,
    );

    if (points.length) {
      const firstPoint = points[0];
      const datasetIndex = firstPoint.index;

      this.setState({
        currentTrade: this.state.history[datasetIndex],
        currentTradeIndex: datasetIndex,
        isOpen: true,
      });
    }
  };

  handleSubmit = (updatedTrade: Trade) => {
    const {history, currentTradeIndex} = this.state;

    const updatedHistory = [...history];

    if (currentTradeIndex) updatedHistory[currentTradeIndex] = updatedTrade;

    this.setState({
      history: updatedHistory,
      isOpen: false,
    });
  };

  handleClose = () => {
    this.setState({isOpen: false});
  };

  handleCloseNotify = () => {
    this.setState({isOpenNotify: false});
  };

  render() {
    const {history, currentTrade} = this.state;

    const data = {
      datasets: [
        {
          label: "Candlestick Chart",
          data: history,
          barThickness: 10,
          backgroundColor: "#fff",
        },
      ],
    };

    return (
      <>
        <Chart data={data} options={options} type="candlestick" onClick={this.handleClick} />
        {this.state.isOpen && currentTrade && (
          <ChartModal
            handleClose={this.handleClose}
            trade={currentTrade}
            onSubmit={this.handleSubmit}
          />
        )}
        {this.state.isOpenNotify && <InfoModal handleClose={this.handleCloseNotify} />}
      </>
    );
  }
}

export default CandlestickChart;
