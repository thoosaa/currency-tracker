import axios from "axios";
import {useCallback, useEffect, useState} from "react";

import {BASE_URL} from "constants/apiroutes";
import {currencies} from "constants/currencies";

import {Quote, QuoteRateTime} from "./types";

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchQuotes = useCallback(async () => {
    let currencyRates: QuoteRateTime[] = [];

    if (!localStorage.length) {
      try {
        const res = await axios.get(`${BASE_URL}/exchangerate/USD`, {
          headers: {"X-CoinAPI-Key": process.env.REACT_APP_API_KEY},
        });

        currencyRates = res.data.rates;
        console.log(currencyRates);

        currencies.forEach(({name}: {name: string}) => {
          const rateInfo = currencyRates?.find(
            ({asset_id_quote}: {asset_id_quote: string}) => asset_id_quote === name,
          );

          if (rateInfo) {
            localStorage.setItem(rateInfo.asset_id_quote, rateInfo.rate.toString());
          }
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      Object.keys(localStorage).forEach((key: string) => {
        return currencyRates.push({
          asset_id_quote: key,
          rate: parseFloat(localStorage.getItem(key) || "0"),
        });
      });

      setIsLoading(false);
    }

    const combinedData = currencies.map((currency) => {
      const {rate} =
        currencyRates.find(
          ({asset_id_quote}: {asset_id_quote: string}) => asset_id_quote === currency.name,
        ) || {};

      return {
        ...currency,
        rate: rate ? rate : 1.0,
      };
    });

    setQuotes(combinedData);
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return {quotes, isLoading, error};
}
