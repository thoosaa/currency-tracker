export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_LIGHT_MODE = "SET_LIGHT_MODE";

interface SetDarkModeAction {
  type: typeof SET_DARK_MODE;
}

interface SetLightModeAction {
  type: typeof SET_LIGHT_MODE;
}

export type ThemeActionTypes = SetDarkModeAction | SetLightModeAction;

export const setDarkMode = (): SetDarkModeAction => ({
  type: SET_DARK_MODE,
});

export const setLightMode = (): SetLightModeAction => ({
  type: SET_LIGHT_MODE,
});
