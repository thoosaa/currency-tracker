import {ChangeEvent, Component, FormEvent} from "react";

import {
  Button,
  Input,
  ModalContainer,
  ModalHeader,
  Text,
  TextBlock,
  Title,
} from "./ChartModal.styled";
import {ChartModalProps, ChartModalState} from "./types";

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
