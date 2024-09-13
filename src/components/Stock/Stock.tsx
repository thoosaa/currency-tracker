import arrowUp from "assets/images/arrowup.svg";
import house from "assets/images/house.svg";

import {FinanceBlock} from "components/FinanceBlock/FinanceBlock";

import {StockList} from "./Stock.styled";

export const Stock = () => {
  return (
    <StockList>
      <FinanceBlock imageUrl={arrowUp} percentInfo={"0.15%"} title={"Bovespa Index"} />
      <FinanceBlock imageUrl={house} percentInfo={"0.15%"} title={"IFIX"} />
    </StockList>
  );
};
