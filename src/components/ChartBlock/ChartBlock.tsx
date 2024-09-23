import {Component} from "react";
import styled from "styled-components";

import CandlestickChart from "components/Chart/Chart";
import DateForm from "components/DateForm/DateForm";
import {LayoutContainer} from "components/Layout/Layout.styled";

const ChartContainer = styled(LayoutContainer)`
  background: ${({theme}) => theme.background};
`;

const Error = styled.p`
  font-size: 24px;
  color: red;
`;

interface ChartBlockState {
  fromDate: string;
  toDate: string;
  error: string;
}

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
