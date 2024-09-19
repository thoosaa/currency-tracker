import styled from "styled-components";

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LinkTitle = styled.p`
  font-size: 28px;
  font-weight: 400;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;
  color: #898989;

  a:hover {
    color: #00ce2c;
  }
`;
