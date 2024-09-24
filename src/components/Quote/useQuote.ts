import axios from "axios";
import {useCallback, useEffect, useState} from "react";

import {BASE_URL} from "constants/apiroutes";
import {currencies} from "constants/currencies";

import {Quote} from "./types";

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchQuotes = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/exchangerate/USD`, {
        headers: {"X-CoinAPI-Key": process.env.REACT_APP_API_KEY},
      });

      const combinedData = currencies.map((currency) => {
        const {rate} =
          res.data.rates.find(
            ({asset_id_quote}: {asset_id_quote: string}) => asset_id_quote === currency.name,
          ) || {};

        return {
          ...currency,
          rate: rate ? rate : 1.0,
        };
      });

      setQuotes(combinedData);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return {quotes, isLoading, error};
}
