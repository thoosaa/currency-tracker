import axios from "axios";
import {useCallback, useEffect, useState} from "react";

import {API_KEY_QUOTE, BASE_URL} from "constants/apiroutes";
import {currencies} from "constants/currencies";
import {getErrorMessage} from "utils/getErrorMsg";

import {Quote} from "./types";

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchQuotes = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/exchangerate/USD`, {
        headers: {"X-CoinAPI-Key": API_KEY_QUOTE},
      });

      const rates = res.data.rates.filter((rate: any) =>
        currencies.some((currency) => currency.name === rate.asset_id_quote),
      );

      const combinedData = currencies.map((currency) => {
        const currencyRate = rates.find((rate: any) => rate.asset_id_quote === currency.name);

        return {
          ...currency,
          rate: currencyRate ? currencyRate.rate : 1.0,
        };
      });

      setQuotes(combinedData);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return {quotes, isLoading, error};
}
