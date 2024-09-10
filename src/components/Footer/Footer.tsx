import green_stocks from "assets/images/green-stocks.svg";
import logo_text from "assets/images/logo_text.svg";
import {FooterLink} from "components/FooterLink/FooterLink";
import {footerlinks} from "constants/footerlinks";
import {FooterContainer, PictureLogo, CompanyDescription, FooterLinks} from "./Footer.styled";

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
