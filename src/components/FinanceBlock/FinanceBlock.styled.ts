import styled from "styled-components";

export const FinanceBlockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 36px 32px;
  background-color: ${({theme}) => theme.financeBlockBgColor};
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #2c4d54;
  border-radius: 8px;
`;

export const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-around;
  gap: 20px;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 35px;
  color: ${({theme}) => theme.financeBlockTitle};
`;

export const PercentInfo = styled.p`
  font-weight: 300;
  font-size: 32px;
  color: ${({theme}) => theme.financeBlockPercent};
`;
