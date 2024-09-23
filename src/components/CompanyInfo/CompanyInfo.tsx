import circle from "assets/images/circle.svg";
import green_stocks_big from "assets/images/green-stocks-big.svg";

import {
  Container,
  InfoSection,
  LastUpdated,
  TextContainer,
  TextInfo,
  Title,
} from "./CompanyInfo.styled";

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

      <LastUpdated>
        <img alt="circle" src={circle} />
        Last Updated: {localStorage.getItem("lastUpdated")?.slice(11, 16)}
      </LastUpdated>
    </Container>
  );
};
