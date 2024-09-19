import green_stocks from "assets/images/green-stocks.svg";
import logo_text from "assets/images/logo_text.svg";
import {FooterLink} from "components/FooterLink/FooterLink";
import {footerlinks} from "constants/footerlinks";

import {CompanyDescription, FooterContainer, FooterLinks, PictureLogo} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <PictureLogo>
          <img alt="green stocks logo" src={green_stocks} />
          <img alt="logo text" src={logo_text} />
        </PictureLogo>

        <CompanyDescription>
          Since then, the company has grown organically to. Starsup is the worlds largest trading
          platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to
          tens of thousands of traders worldwide.
        </CompanyDescription>
      </div>

      <FooterLinks>
        {Object.entries(footerlinks).map(([key, value]) => (
          <FooterLink key={key} items={value} title={key} />
        ))}
      </FooterLinks>
    </FooterContainer>
  );
};
