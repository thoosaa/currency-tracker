import {LayoutContainer} from "components/Layout/Layout.styled";
import styled from "styled-components";

export const HeaderContainer = styled(LayoutContainer)`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: clamp(10px, 5vw, 100px);
`;
