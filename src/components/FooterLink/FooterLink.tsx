import {FooterLinkContainer, LinkTitle, ListItem} from "./FooterLink.styled";
import {FooterLinkProps} from "./types";

export const FooterLink = ({title, items}: FooterLinkProps) => {
  return (
    <FooterLinkContainer>
      <LinkTitle>{title}</LinkTitle>

      <ul>
        {items.map((item) => (
          <ListItem key={item}>
            <a href="/">{item}</a>
          </ListItem>
        ))}
      </ul>
    </FooterLinkContainer>
  );
};
