import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 30px 23px;

  @media (min-width: 575.98px) {
    padding: 30px calc(50% - 290px);
  }

  @media (min-width: 767.98px) {
    padding: 30px calc(50% - 360px);
  }

  @media (min-width: 991.98px) {
    padding: 30px calc(50% - 480px);
  }

  @media (min-width: 1371.98px) {
    padding: 30px calc(50% - 640px);
  }
`;
