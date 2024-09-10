import styled from "styled-components";

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LinkTitle = styled.p`
  font-size: 28px;
  font-weight: 400;
`;

const LinkList = styled.ul`
  li {
    margin-bottom: 20px;
  }
`;

const ListItem = styled.li`
  font-size: 24px;
  font-weight: 400;
  color: #898989;

  a:hover {
    color: #00ce2c;
  }
`;

export const FooterLink = ({title, items}: {title: string; items: string[]}) => {
  return (
    <FooterLinkContainer>
      <LinkTitle>{title}</LinkTitle>
      <LinkList>
        {items.map((item) => (
          <ListItem key={item}>
            <a href="#">{item}</a>
          </ListItem>
        ))}
      </LinkList>
    </FooterLinkContainer>
  );
};
