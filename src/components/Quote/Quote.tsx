import {useState} from "react";

import {FinanceBlock} from "components/FinanceBlock/FinanceBlock";
import {QuoteModal} from "components/QuoteModal/QuoteModal";

import {QuoteList} from "./Quotes.styled";
import {useQuotes} from "./useQuote";

export const Quote = () => {
  const {quotes, isLoading, error} = useQuotes();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<string>("");

  const closeModal = () => setIsOpen(false);
  const openModal = (quoteName: string) => () => {
    setIsOpen(true);
    setCurrentQuote(quoteName);
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Oops... Something went wrong</h1>;
  }

  return (
    <>
      <QuoteList>
        {quotes.map(({name, fullName, background, icon, rate}) => (
          <FinanceBlock
            key={name}
            background={background}
            imageUrl={icon}
            percentInfo={`R$ ${rate.toFixed(2)}`}
            title={fullName}
            onClick={openModal(name)}
          />
        ))}
      </QuoteList>
      {isOpen && <QuoteModal closeModal={closeModal} currentQuote={currentQuote} />}
    </>
  );
};
