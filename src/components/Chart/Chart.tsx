import axios from "axios";
import {Chart as ChartJS} from "chart.js";
import React, {Component} from "react";
import {Chart} from "react-chartjs-2";

import ChartModal from "components/ChartModal/ChartModal";

import {options} from "./chartconfig";
import {CandlestickChartState, TradeApi} from "./types";

import "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

class CandlestickChart extends Component<{}, CandlestickChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      history: [],
      currentTrade: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get(
        "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history",
        {
          headers: {
            "X-CoinAPI-Key": process.env.REACT_API_KEY,
          },
          params: {
            period_id: "1DAY",
            time_start: "2024-08-01T00:00:00",
            time_end: "2024-08-21T00:00:00",
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
      const datasetIndex = firstPoint.datasetIndex;

      console.log(this.state.history[datasetIndex]);
      this.setState({currentTrade: this.state.history[datasetIndex]});
    }
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
        {currentTrade && <ChartModal trade={currentTrade} />}
      </>
    );
  }
}

export default CandlestickChart;
