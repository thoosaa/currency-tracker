import green_stocks from "assets/images/green-stocks.svg";
import {menu} from "constants/menu";

import {SwitchButton} from "components/ThemeButton/ThemeButton";

import {HeaderContainer, MenuList} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <img alt="Logo" src={green_stocks} />
      <MenuList>
        {Object.entries(menu).map(([key, value]) => (
          <li key={key}>
            <a key={key} href={value}>
              {key}
            </a>
          </li>
        ))}
      </MenuList>
      <SwitchButton />
    </HeaderContainer>
  );
};
