import {AppDispatch} from "store/store";
import green_stocks from "assets/images/green-stocks.svg";
import {dark, light} from "components/App/theme";
import {useDispatch, useSelector} from "react-redux";
import {setDarkMode, setLightMode} from "store/actions/actions";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({theme}) => theme.background ?? "#fff"};
`;

export const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);

  const toggleTheme = () => {
    if (theme === dark) {
      dispatch(setLightMode());
      console.log(theme);
    } else {
      dispatch(setDarkMode());
      console.log(theme);
    }
  };

  return (
    <HeaderContainer>
      <img src={green_stocks} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Timeline</li>
        <li>Bank Card</li>
        <li>Contact</li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </HeaderContainer>
  );
};
