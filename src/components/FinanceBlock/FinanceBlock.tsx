import {
  FinanceBlockContainer,
  ImageWrapper,
  PercentInfo,
  StockInfo,
  Title,
} from "./FinanceBlock.styled";
import {FinanceBlockProps} from "./types";

export const FinanceBlock = ({
  background,
  imageUrl,
  title,
  percentInfo,
  onClick,
}: FinanceBlockProps) => {
  return (
    <FinanceBlockContainer onClick={onClick}>
      <ImageWrapper style={{backgroundColor: background}}>
        <img alt="currency" src={imageUrl} />
      </ImageWrapper>

      <StockInfo>
        <Title>{title}</Title>
        <PercentInfo>{percentInfo}</PercentInfo>
      </StockInfo>
    </FinanceBlockContainer>
  );
};
