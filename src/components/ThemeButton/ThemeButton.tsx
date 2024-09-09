import {dark} from "components/App/theme";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLightMode, setDarkMode} from "store/actions/actions";
import {AppDispatch} from "store/store";
import {CheckBox, Switch, SwitchWrap} from "./ThemeButton.styled";

export const SwitchButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    if (theme === dark) {
      dispatch(setLightMode());
      console.log(theme);
    } else {
      dispatch(setDarkMode());
      console.log(theme);
    }

    setIsChecked((prev) => !prev);
  };

  return (
    <SwitchWrap>
      <CheckBox type="checkbox" checked={isChecked} onChange={toggleTheme} />
      <Switch className={isChecked ? "checked" : ""} />
    </SwitchWrap>
  );
};
