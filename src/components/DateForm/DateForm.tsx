import {ChangeEvent, Component, FormEvent} from "react";

import {getToday, validateDateRange} from "utils/date";

import {Button, Form, Input, Text} from "./DateForm.styled";
import {DateFormProps, DateFormState} from "./types";

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

    if (validateDateRange(this.state.fromDate, this.state.toDate)) {
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
        <Input max={getToday()} name="fromDate" type="date" onChange={this.handleChange} />
        <Text>To: </Text>
        <Input max={getToday()} name="toDate" type="date" onChange={this.handleChange} />
        <Button type="submit">OK</Button>
      </Form>
    );
  }
}

export default DateForm;
