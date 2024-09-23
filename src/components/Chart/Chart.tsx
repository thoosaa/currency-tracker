import axios from "axios";
import {Chart as ChartJS} from "chart.js";
import React, {Component} from "react";
import {Chart} from "react-chartjs-2";

import ChartModal from "components/ChartModal/ChartModal";
import {Observer} from "utils/Observer";

import {options} from "./chartconfig";
import {CandlestickChartState, Trade, TradeApi} from "./types";

import "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

type CandlestickChartProps = {
  fromDate: string;
  toDate: string;
};

class CandlestickChart extends Component<CandlestickChartProps, CandlestickChartState> {
  observer = new Observer();

  constructor(props: CandlestickChartProps) {
    super(props);
    this.state = {
      history: [],
      currentTrade: undefined,
      isOpen: false,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.observer.subscribe(() => alert("Chart updated"));
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
      const response = await axios.get(
        "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history",
        {
          headers: {
            "X-CoinAPI-Key": "E5CFB881-BDAD-42DD-9F82-39607D10D700",
          },
          params: {
            period_id: "1DAY",
            time_start: `${this.props.fromDate}T00:00:00`,
            time_end: `${this.props.toDate}T00:00:00`,
          },
        },
      );

      const tradeInfo = response.data.map(
        ({time_period_start, price_high, price_low, price_open, price_close}: TradeApi) => ({
          x: new Date(time_period_start),
          o: price_open,
          h: price_high,
          l: price_low,
          c: price_close,
        }),
      );

      console.log(tradeInfo);
      this.setState({history: tradeInfo});
    } catch (error) {
      console.error("Error fetching data:", error);
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

      console.log(points);
      console.log(this.state.history[datasetIndex]);

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
      </>
    );
  }
}

export default CandlestickChart;
