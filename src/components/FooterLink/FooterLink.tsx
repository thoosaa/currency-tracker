import {FooterLinkContainer, LinkTitle, LinkList, ListItem} from "./FooterLink.styled";

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
