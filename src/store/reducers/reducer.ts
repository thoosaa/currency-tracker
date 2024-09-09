// reducer.ts
import {SET_DARK_MODE, SET_LIGHT_MODE, ThemeActionTypes} from "../actions/actions";
import {dark, light} from "components/App/theme";

interface ThemeState {
  theme: typeof dark | typeof light;
}

const initialState: ThemeState = {
  theme: light,
};

const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {...state, theme: dark};
    case SET_LIGHT_MODE:
      return {...state, theme: light};
    default:
      return state;
  }
};

export default themeReducer;
