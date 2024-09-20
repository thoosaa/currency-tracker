import styled from "styled-components";

import {LayoutContainer} from "components/Layout/Layout.styled";

export const FooterContainer = styled(LayoutContainer)`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  display: flex;
  gap: 105px;
  margin-bottom: 54px;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

export const PictureLogo = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  margin-bottom: 20px;
`;

export const CompanyDescription = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  text-align: left;
`;
