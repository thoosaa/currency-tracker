import styled from "styled-components";

export const OptionsBlock = styled.ul`
  position: absolute;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
  background: ${({theme}) => theme.searchBg};
  border-radius: 5px;
`;

export const Option = styled.li`
  color: ${({theme}) => theme.inputColor};
  opacity: 0.5;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #7e7f80;
  border-bottom: 0.5px solid #7e7f80;
  border-radius: 5px;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 50%;
  max-width: 450px;
  padding-right: 20px;
  margin: 0 auto;
  background: ${({theme}) => theme.searchBg};
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  background: ${({theme}) => theme.searchBg};
  color: ${({theme}) => theme.inputColor};
  border: none;
  font-size: 18px;

  &:focus {
    border: none;
  }
`;
