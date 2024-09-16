import green_stocks_big from "assets/images/green-stocks-big.svg";

import {Container, InfoSection, TextContainer, TextInfo, Title} from "./CompanyInfo.styled";

export const CompanyInfo = () => {
  return (
    <Container>
      <InfoSection>
        <TextContainer>
          <Title>Modsen Currency Tracker</Title>
          <TextInfo>
            Quotes for dollar and <span>other</span> international currencies
          </TextInfo>
        </TextContainer>

        <img alt="green stocks" src={green_stocks_big} />
      </InfoSection>
    </Container>
  );
};
