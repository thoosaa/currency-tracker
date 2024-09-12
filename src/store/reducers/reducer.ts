import {dark, light} from "components/App/theme";

import {SET_THEME, ThemeActionTypes} from "../actions/actions";

interface ThemeState {
  theme: typeof dark | typeof light;
}

const initialState: ThemeState = {
  theme: light,
};

const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload === "dark" ? dark : light,
      };
    default:
      return state;
  }
};

export default themeReducer;
