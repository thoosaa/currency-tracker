import {ChangeEvent, useState} from "react";

import {currencies} from "constants/currencies";
import {convert} from "utils/convert";

import {
  ModalContainer,
  ModalHeader,
  Option,
  Select,
  Text,
  TextBlock,
  Title,
} from "./QuoteModal.styled";
import {QuoteModalProps} from "./types";

export const QuoteModal = ({closeModal, currentQuote}: QuoteModalProps) => {
  const [quote, setQuote] = useState<string>("USD");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => setQuote(event.target.value);

  return (
    <ModalContainer>
      <ModalHeader>
        <Title>Converter</Title>
        <button onClick={closeModal}>x</button>
      </ModalHeader>

      <div>
        <TextBlock>
          <Text>From: </Text>
          <Text>{currentQuote}</Text>
        </TextBlock>

        <TextBlock>
          <Text>To: </Text>
          <Select onChange={handleChange}>
            {currencies.map(({name, fullName}) => (
              <Option key={fullName} value={name}>
                {fullName}
              </Option>
            ))}
          </Select>
        </TextBlock>

        <TextBlock>
          <Text>Result: </Text>
          <Text>{convert(currentQuote, quote).toFixed(2)}</Text>
        </TextBlock>
      </div>
    </ModalContainer>
  );
};
