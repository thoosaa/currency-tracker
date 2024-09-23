import {ChangeEvent, Component, FormEvent} from "react";
import styled from "styled-components";

import {ChartModalProps} from "./types";

const ModalContainer = styled.div`
  width: 520px;
  background-color: ${({theme}) => theme.financeBlockBgColor};
  padding: 36.5px 32px;
  border-radius: 8px;
  color: ${({theme}) => theme.financeBlockTitle};
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

type ChartModalState = {
  open: number;
  close: number;
  high: number;
  low: number;
};

class ChartModal extends Component<ChartModalProps, ChartModalState> {
  constructor(props: ChartModalProps) {
    super(props);

    this.state = {
      open: props.trade.o,
      close: props.trade.c,
      high: props.trade.h,
      low: props.trade.l,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    } as unknown as ChartModalState);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const updatedTrade = {
      x: this.props.trade.x,
      o: this.state.open,
      c: this.state.close,
      h: this.state.high,
      l: this.state.low,
    };

    this.props.onSubmit(updatedTrade);
  };

  render() {
    const {open, close, high, low} = this.state;

    return (
      <ModalContainer>
        <ModalHeader>
          <Title>{this.props.trade.x.toDateString()}</Title>
          <button onClick={this.props.handleClose}>x</button>
        </ModalHeader>
        <form onSubmit={this.handleSubmit}>
          <TextBlock>
            <Text>Open </Text>
            <Input name="open" type="number" value={open} onChange={this.handleChange} />
          </TextBlock>
          <TextBlock>
            <Text>Close </Text>
            <Input name="close" type="number" value={close} onChange={this.handleChange} />
          </TextBlock>
          <TextBlock>
            <Text>High </Text>
            <Input name="high" type="number" value={high} onChange={this.handleChange} />
          </TextBlock>
          <TextBlock>
            <Text>Low </Text>
            <Input name="low" type="number" value={low} onChange={this.handleChange} />
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
