import axios from "axios";
import {ChartOptions} from "chart.js";
import React, {useEffect, useState} from "react";
import {Chart} from "react-chartjs-2";

import "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

type Trade = {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
};

type TradeApi = {
  time_period_start: string;
  price_open: number;
  price_high: number;
  price_low: number;
  price_close: number;
};

const CandlestickChart: React.FC = () => {
  const [history, setHistory] = useState<Trade[]>([]);
  const API_KEY = "YOUR_API_KEY"; // Replace with your CoinAPI key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history",
          {
            headers: {"X-CoinAPI-Key": "E5CFB881-BDAD-42DD-9F82-39607D10D700"},
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
        setHistory(tradeInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    datasets: [
      {
        label: "Candlestick Chart",
        data: history,
        barThickness: 10,
      },
    ],
  };

  const options: ChartOptions = {
    scales: {
      x: {
        type: "time",
      },
    },
  };

  return <Chart data={data} options={options} type="candlestick" />;
};

export default CandlestickChart;
