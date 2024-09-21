import {Component} from "react";

import CandlestickChart from "components/Chart/Chart";
import {Layout} from "components/Layout/Layout";

class ChartBlock extends Component {
  render() {
    return (
      <Layout>
        <CandlestickChart />
      </Layout>
    );
  }
}

export default ChartBlock;
