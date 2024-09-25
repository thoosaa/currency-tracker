import {
  FinanceBlockContainer,
  ImageWrapper,
  PercentInfo,
  StockInfo,
  Title,
} from "./FinanceBlock.styled";
import {FinanceBlockProps} from "./types";

export const FinanceBlock = (stockInfo: FinanceBlockProps) => {
  return (
    <FinanceBlockContainer onClick={stockInfo.onClick}>
      <ImageWrapper style={{backgroundColor: stockInfo?.background}}>
        <img alt="currency" src={stockInfo.imageUrl} />
      </ImageWrapper>

      <StockInfo>
        <Title>{stockInfo.title}</Title>
        <PercentInfo>{stockInfo.percentInfo}</PercentInfo>
      </StockInfo>
    </FinanceBlockContainer>
  );
};
