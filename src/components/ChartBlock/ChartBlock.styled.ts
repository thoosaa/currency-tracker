import {styled} from "styled-components";

import {LayoutContainer} from "components/Layout/Layout.styled";

export const ChartContainer = styled(LayoutContainer)`
  background: ${({theme}) => theme.background};
  position: relative;
`;

export const Error = styled.p`
  font-size: 24px;
  color: red;
`;
