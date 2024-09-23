import {ChangeEvent, Component, FormEvent} from "react";

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
