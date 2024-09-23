import {ChangeEvent, Component, FormEvent} from "react";
import styled from "styled-components";

const Input = styled.input`
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 5px;
  padding: 5px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 28px;
  color: ${({theme}) => theme.financeBlockPercent};
`;

const Button = styled.button`
  background: ${({theme}) => theme.financeBlockBgColor};
  color: ${({theme}) => theme.financeBlockPercent};
  border: 1px solid ${({theme}) => theme.background};
  padding: 10px;
  border-radius: 8px;

  &:hover {
    border: 1px solid ${({theme}) => theme.financeBlockPercent};
  }
`;

interface DateFormState {
  fromDate: string;
  toDate: string;
}

interface DateFormProps {
  handleChange: (fromDate: string, toDate: string) => void;
  handleError: (error: string) => void;
}

class DateForm extends Component<DateFormProps, DateFormState> {
  state = {
    fromDate: "",
    toDate: "",
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    this.setState({[name]: value} as unknown as DateFormState);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);

    if (
      new Date(this.state.fromDate).getTime() <= new Date(this.state.toDate).getTime() &&
      (new Date(this.state.toDate).getTime() - new Date(this.state.fromDate).getTime()) /
        (1000 * 3600 * 24) >=
        10
    ) {
      this.props.handleChange(this.state.fromDate, this.state.toDate);
      this.props.handleError("");
    } else {
      this.props.handleError(
        "From date needs to be less than to date, the difference between the two needs to be 10 days min",
      );
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Text>From: </Text>
        <Input
          max={new Date().toISOString().slice(0, 10)}
          name="fromDate"
          type="date"
          onChange={this.handleChange}
        />
        <Text>To: </Text>
        <Input
          max={new Date().toISOString().slice(0, 10)}
          name="toDate"
          type="date"
          onChange={this.handleChange}
        />
        <Button type="submit">OK</Button>
      </Form>
    );
  }
}

export default DateForm;
