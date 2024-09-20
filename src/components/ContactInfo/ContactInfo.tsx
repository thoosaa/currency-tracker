import {useSelector} from "react-redux";

import modsen_logo_dark from "assets/images/modsen-logo-dark.png";
import modsen_logo_light from "assets/images/modsen-logo-light.png";
import {dark} from "components/App/theme";
import {contactlinks} from "constants/contactlinks";
import {RootState} from "store/store";

import {ContactContainer, LinkContainer, LinkImg, Title} from "./Contact.styled";

export const ContactInfo = () => {
  const theme = useSelector((state: RootState) => state.theme);

  const logo = theme === dark ? modsen_logo_dark : modsen_logo_light;

  return (
    <ContactContainer>
      <img alt="modsen logo" src={logo} width={300} />

      <Title>CONTACT US</Title>

      <LinkContainer>
        {contactlinks.map(({icon, name, link}) => (
          <a key={link} href={link}>
            <LinkImg key={name} alt={name} src={icon} />
          </a>
        ))}
      </LinkContainer>
    </ContactContainer>
  );
};
