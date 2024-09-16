import axios from "axios";
import {useCallback, useEffect, useState} from "react";

export function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;

    return String(error);
  }

  const fetchQuotes = useCallback(async () => {
    try {
      const res = await axios.get("https://rest.coinapi.io/v1/assets", {
        headers: {"X-CoinAPI-Key": " 9D8D508E-EF66-459C-949A-822557F5DAF0"},
      });
      const info = res.data;

      setQuotes(info);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, []);

  return {quotes, isLoading, error};
}
