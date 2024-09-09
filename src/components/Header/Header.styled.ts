import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({theme}) => theme.background ?? "#fff"};
  color: ${({theme}) => theme.color ?? "#000"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 10px;

  @media (min-width: 575.98px) {
    gap: 45px;
  }

  @media (min-width: 991.98px) {
    gap: 100px;
  }
`;
