import {LayoutContainer} from "components/Layout/Layout.styled";
import {styled} from "styled-components";

export const SectionContainer = styled(LayoutContainer)`
  background-color: ${({theme}) => theme.background};
`;

export const SectionTitle = styled.h2`
  position: relative;
  font-size: 32px;
  font-weight: 300;
  color: ${({theme}) => theme.color};

  &: before {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: clamp(300px, 100%, 520px);
    border-bottom: 2px solid #474747;
  }
`;
