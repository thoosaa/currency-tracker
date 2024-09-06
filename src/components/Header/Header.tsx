import logo from "assets/images/logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({theme}) => theme.bg ?? "#fff"};
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Timeline</li>
        <li>Bank Card</li>
        <li>Contact</li>
      </ul>
      <button>Change theme</button>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </HeaderContainer>
  );
};
