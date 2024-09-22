import {Component} from "react";
import styled from "styled-components";

import {ChartModalProps} from "./types";

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

const Input = styled.input`
  font-size: 18px;
  background-color: ${({theme}) => theme.financeBlockBgColor};
  border: 1px solid ${({theme}) => theme.financeBlockPercent};
  color: ${({theme}) => theme.financeBlockPercent};
  border-radius: 5px;
  padding: 2px;
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

const Button = styled.button`
  background: ${({theme}) => theme.background};
  border: 1px solid ${({theme}) => theme.background};
  padding: 10px;
  border-radius: 8px;

  &:hover {
    border: 1px solid ${({theme}) => theme.financeBlockPercent};
  }
`;

class ChartModal extends Component<ChartModalProps> {
  constructor(props: ChartModalProps) {
    super(props);
  }

  render() {
    return (
      <ModalContainer>
        <ModalHeader>
          <Title>{this.props.trade.x.toDateString()}</Title>
          <button>x</button>
        </ModalHeader>
        <form>
          <TextBlock>
            <Text>Open </Text>
            <Input type="number" value={this.props.trade.o} />
          </TextBlock>
          <TextBlock>
            <Text>Close </Text>
            <Input type="number" value={this.props.trade.c} />
          </TextBlock>
          <TextBlock>
            <Text>High </Text>
            <Input type="number" value={this.props.trade.h} />
          </TextBlock>
          <TextBlock>
            <Text>Low </Text>
            <Input type="number" value={this.props.trade.l} />
          </TextBlock>

          <Button type="submit">
            <Text>Submit Changes</Text>
          </Button>
        </form>
      </ModalContainer>
    );
  }
}

export default ChartModal;
