import {Component} from "react";
import styled from "styled-components";

import CandlestickChart from "components/Chart/Chart";
import {LayoutContainer} from "components/Layout/Layout.styled";

const ChartContainer = styled(LayoutContainer)`
  background: ${({theme}) => theme.background};
`;

class ChartBlock extends Component {
  render() {
    return (
      <ChartContainer>
        <CandlestickChart />
      </ChartContainer>
    );
  }
}

export default ChartBlock;
