import {Component} from "react";

import CandlestickChart from "components/Chart/Chart";
import DateForm from "components/DateForm/DateForm";

import {ChartContainer, Error} from "./ChartBlock.styled";
import {ChartBlockState} from "./types";

class ChartBlock extends Component<{}, ChartBlockState> {
  state = {
    fromDate: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    toDate: new Date().toISOString().slice(0, 10),
    error: "",
  };

  handleChange = (fromDate: string, toDate: string) => {
    this.setState({fromDate, toDate});
  };

  handleError = (error: string) => {
    this.setState({error});
  };

  render() {
    return (
      <ChartContainer>
        <DateForm handleChange={this.handleChange} handleError={this.handleError} />
        <Error>{this.state.error}</Error>
        <CandlestickChart fromDate={this.state.fromDate} toDate={this.state.toDate} />
      </ChartContainer>
    );
  }
}

export default ChartBlock;
