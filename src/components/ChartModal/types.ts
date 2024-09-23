import {Trade} from "components/Chart/types";

export type ChartModalProps = {
  trade: Trade;
  handleClose: () => void;
  onSubmit: (updatedTrade: Trade) => void;
};
