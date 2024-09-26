import styled from "styled-components";

export const InfoModalContainer = styled.div`
  background-color: ${({theme}) => theme.financeBlockBgColor};
  position: absolute;
  padding: 36px 32px;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 35px;
  color: #2bdd50;
`;
