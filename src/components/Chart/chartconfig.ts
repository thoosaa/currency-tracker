import {ChartOptions} from "chart.js";

export const options: ChartOptions = {
  scales: {
    x: {
      type: "time",
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
