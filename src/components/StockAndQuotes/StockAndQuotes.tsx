import {Quote} from "components/Quote/Quote";
import {Stock} from "components/Stock/Stock";

import {SectionContainer, SectionTitle} from "./StockAndQuotes.styled";

export const StockAndQuotes = () => {
  return (
    <SectionContainer>
      <SectionTitle>Stocks</SectionTitle>
      <Stock />

      <SectionTitle>Quotes</SectionTitle>
      <Quote />
    </SectionContainer>
  );
};
