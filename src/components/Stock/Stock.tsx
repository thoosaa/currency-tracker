import {FinanceBlock} from "components/FinanceBlock/FinanceBlock";

import {StockList} from "./Stock.styled";

export const Stock = () => {
  return (
    <StockList>
      <FinanceBlock imageUrl={""} percentInfo={"0.15%"} title={"Bovespa Index"} />
    </StockList>
  );
};
