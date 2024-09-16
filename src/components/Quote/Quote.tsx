import styled from "styled-components";

import arrowUp from "assets/images/arrowup.svg";
import {FinanceBlock} from "components/FinanceBlock/FinanceBlock";

import {useQuotes} from "./useQuote";

const QuoteList = styled.div`
  margin-top: 77px;
  margin-bottom: 86px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 520px));
  grid-row-gap: 56px;
  justify-content: space-between;
`;

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
          key={currency.asset_id}
          imageUrl={arrowUp}
          percentInfo={currency.price_usd}
          title={"Bovespa Index"}
        />
      ))}
    </QuoteList>
  );
};
