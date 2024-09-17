import {FinanceBlock} from "components/FinanceBlock/FinanceBlock";

import {QuoteList} from "./Quotes.styled";
import {useQuotes} from "./useQuote";

export const Quote = () => {
  const {quotes, isLoading, error} = useQuotes();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error {error}</h1>;
  }

  return (
    <QuoteList>
      {quotes.map((currency: any) => (
        <FinanceBlock
          key={currency.name}
          background={currency.background}
          imageUrl={currency.icon}
          percentInfo={`R$ ${currency.rate.toFixed(2)}`}
          title={currency.name}
        />
      ))}
    </QuoteList>
  );
};
