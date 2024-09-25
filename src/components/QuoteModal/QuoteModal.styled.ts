import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 520px;
  background-color: ${({theme}) => theme.financeBlockBgColor};
  padding: 36.5px 32px;
  border-radius: 8px;
  color: ${({theme}) => theme.financeBlockTitle};
  border: 1px solid ${({theme}) => theme.financeBlockTitle};
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 35px;
  color: #2bdd50;
`;

export const Select = styled.select`
  font-weight: 300;
  font-size: 32px;
  color: ${({theme}) => theme.financeBlockTitle};
  background-color: ${({theme}) => theme.financeBlockBgColor};
  border: none;
`;

export const Option = styled.option`
  background-color: ${({theme}) => theme.financeBlockBgColor};
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 32px;
  color: ${({theme}) => theme.financeBlockPercent};
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
