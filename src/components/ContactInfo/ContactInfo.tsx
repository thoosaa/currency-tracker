import modsen_logo_dark from "assets/images/modsen-logo-dark.png";
import modsen_logo_light from "assets/images/modsen-logo-light.png";
import {contactlinks} from "constants/contactlinks";
import {useSelector} from "react-redux";

import {RootState} from "store/store";
import {dark} from "components/App/theme";
import {LayoutContainer} from "components/Layout/Layout.styled";
import styled from "styled-components";

const ContactContainer = styled(LayoutContainer)`
  background: ${({theme}) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  color: ${({theme}) => theme.color};
  font-weight: 700;
  font-size: 32px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const LinkImg = styled.img<{isDarkTheme: boolean}>`
  width: 30px;
  filter: ${({isDarkTheme}) => (isDarkTheme ? "invert(100%)" : "invert(0%)")};
`;

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
            <LinkImg key={name} alt={name} isDarkTheme={theme == dark} src={icon} />
          </a>
        ))}
      </LinkContainer>
    </ContactContainer>
  );
};
