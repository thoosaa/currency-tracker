import {Component} from "react";

import CandlestickChart from "components/Chart/Chart";
import DateForm from "components/DateForm/DateForm";
import {getDate30daysAgo, getToday} from "utils/date";

import {ChartContainer, Error} from "./ChartBlock.styled";
import {ChartBlockState} from "./types";

class ChartBlock extends Component<{}, ChartBlockState> {
  state = {
    fromDate: getDate30daysAgo(),
    toDate: getToday(),
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
