import green_stocks from "assets/images/green-stocks.svg";
import {SwitchButton} from "components/ThemeButton/ThemeButton";
import {menu} from "constants/menu";
import {HeaderContainer, MenuList} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={green_stocks} alt="Logo" />
      <MenuList>
        {Object.entries(menu).map(([key, value]) => (
          <li>
            <a href={value}>{key}</a>
          </li>
        ))}
      </MenuList>
      <SwitchButton />
    </HeaderContainer>
  );
};
