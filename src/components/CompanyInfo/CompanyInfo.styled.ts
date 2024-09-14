import {LayoutContainer} from "components/Layout/Layout.styled";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.background};
`;
export const InfoSection = styled(LayoutContainer)`
  display: flex;
  background: #247940;
  background: linear-gradient(77deg, #24794000 0%, ${({theme}) => theme.gradientColor} 100%);
  gap: 80px;

  @media (max-width: 991.98px) {
    img {
      display: none;
    }

    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  background: linear-gradient(90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 90.36px;
  font-weight: 600;
  text-align: right;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  flex: 0.5 0.5 50%;
`;

export const TextInfo = styled.p`
  color: ${({theme}) => theme.color};
  font-size: 25px;
  font-weight: 300;
  line-height: 46.77px;
  text-align: right;
  margin-top: 20px;

  span:after {
    content: "";
    display: block;
  }

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;
