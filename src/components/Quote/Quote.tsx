import {FinanceBlock} from "components/FinanceBlock/FinanceBlock";

import {QuoteList} from "./Quotes.styled";
import {useQuotes} from "./useQuote";

export const Quote = () => {
  const {quotes, isLoading, error} = useQuotes();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Oops... Something went wrong</h1>;
  }

  return (
    <QuoteList>
      {quotes.map(({name, background, icon, rate}) => (
        <FinanceBlock
          key={name}
          background={background}
          imageUrl={icon}
          percentInfo={`R$ ${rate.toFixed(2)}`}
          title={name}
        />
      ))}
    </QuoteList>
  );
};
