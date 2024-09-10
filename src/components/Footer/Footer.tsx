import green_stocks from "assets/images/green-stocks.svg";
import logo_text from "assets/images/logo_text.svg";
import {FooterLink} from "components/FooterLink/FooterLink";
import {footerlinks} from "constants/footerlinks";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${({theme}) => theme.background ?? "#fff"};
  color: ${({theme}) => theme.color ?? "#000"};
  display: flex;
  gap: 105px;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

const PictureLogo = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  margin-bottom: 20px;
`;

const CompanyDescription = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  text-align: left;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <PictureLogo>
          <img src={green_stocks} />
          <img src={logo_text} />
        </PictureLogo>
        <CompanyDescription>
          Since then, the company has grown organically to. Starsup is the world's largest trading
          platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to
          tens of thousands of traders worldwide.
        </CompanyDescription>
      </div>

      <FooterLinks>
        {Object.entries(footerlinks).map(([key, value]) => (
          <FooterLink title={key} items={value} key={key} />
        ))}
      </FooterLinks>
    </FooterContainer>
  );
};
