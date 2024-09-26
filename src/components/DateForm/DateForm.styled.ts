import styled from "styled-components";

export const Input = styled.input`
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 5px;
  padding: 5px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 28px;
  color: ${({theme}) => theme.financeBlockPercent};
`;

export const Button = styled.button`
  background: ${({theme}) => theme.financeBlockBgColor};
  color: ${({theme}) => theme.financeBlockPercent};
  border: 1px solid ${({theme}) => theme.background};
  padding: 10px;
  border-radius: 8px;

  &:hover {
    border: 1px solid ${({theme}) => theme.financeBlockPercent};
  }
`;
