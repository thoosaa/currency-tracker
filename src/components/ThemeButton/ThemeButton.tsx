import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dark} from "components/App/theme";
import {setDarkMode, setLightMode} from "store/actions/actions";
import {AppDispatch} from "store/store";

import {CheckBox, Switch, SwitchWrap} from "./ThemeButton.styled";

export const SwitchButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    if (theme === dark) {
      dispatch(setLightMode());
    } else {
      dispatch(setDarkMode());
    }

    setIsChecked((prev) => !prev);
  };

  return (
    <SwitchWrap>
      <CheckBox checked={isChecked} type="checkbox" onChange={toggleTheme} />
      <Switch className={isChecked ? "checked" : ""} />
    </SwitchWrap>
  );
};
