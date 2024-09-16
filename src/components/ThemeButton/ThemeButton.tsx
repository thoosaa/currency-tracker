import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {dark} from "components/App/theme";
import {setTheme} from "store/actions/actions";
import {AppDispatch} from "store/store";

import {CheckBox, Switch, SwitchWrap} from "./ThemeButton.styled";

export const SwitchButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const [isChecked, setIsChecked] = useState(theme == dark);

  const toggleTheme = () => {
    if (theme === dark) {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
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
