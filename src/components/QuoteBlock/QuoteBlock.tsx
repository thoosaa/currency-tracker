import {Quote} from "components/Quote/Quote";

import {SectionContainer, SectionTitle} from "./QuoteBlock.styled";

export const QuoteBlock = () => {
  return (
    <SectionContainer>
      <SectionTitle>Quotes</SectionTitle>
      <Quote />
    </SectionContainer>
  );
};
