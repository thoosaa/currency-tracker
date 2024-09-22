export type Trade = {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
};

export type TradeApi = {
  time_period_start: string;
  price_open: number;
  price_high: number;
  price_low: number;
  price_close: number;
};

export type CandlestickChartState = {
  history: Trade[];
  currentTrade?: Trade;
};
