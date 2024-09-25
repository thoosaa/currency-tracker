export interface Quote {
  name: string;
  background: string;
  icon: string;
  rate: number;
}

export interface QuoteRateTime {
  asset_id_quote: string;
  rate: number;
  time?: string;
}
