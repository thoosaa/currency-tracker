import styled from "styled-components";

import {currencies} from "constants/currencies";

const ModalContainer = styled.div`
  width: 520px;
  background-color: ${({theme}) => theme.financeBlockBgColor};
  padding: 36.5px 32px;
  border-radius: 8px;
  color: ${({theme}) => theme.financeBlockTitle};
  font-size: 35px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 35px;
  color: #2bdd50;
`;

const Select = styled.select`
  font-weight: 300;
  font-size: 32px;
  color: ${({theme}) => theme.financeBlockTitle};
  background-color: ${({theme}) => theme.financeBlockBgColor};
  border: none;
`;

const Option = styled.option`
  background-color: ${({theme}) => theme.financeBlockBgColor};
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 32px;
  color: ${({theme}) => theme.financeBlockPercent};
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const QuoteModal = () => {
  return (
    <ModalContainer>
      <ModalHeader>
        <Title>Converter</Title>
        <button>x</button>
      </ModalHeader>

      <div>
        <TextBlock>
          <Text>From: </Text>
          <Text>USD</Text>
        </TextBlock>

        <TextBlock>
          <Text>To: </Text>
          <Select>
            {currencies.map(({name, fullName}) => (
              <Option key={fullName} value={name}>
                {fullName}
              </Option>
            ))}
          </Select>
        </TextBlock>

        <TextBlock>
          <Text>Result: </Text>
          <Text>12</Text>
        </TextBlock>
      </div>
    </ModalContainer>
  );
};
