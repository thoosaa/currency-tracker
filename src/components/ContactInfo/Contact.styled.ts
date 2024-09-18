import styled from "styled-components";

import {LayoutContainer} from "components/Layout/Layout.styled";

export const ContactContainer = styled(LayoutContainer)`
  background: ${({theme}) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.color};
  font-weight: 700;
  font-size: 32px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const LinkImg = styled.img`
  width: 30px;
  filter: ${({theme}) => theme.logoStyle};
`;
