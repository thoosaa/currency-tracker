export const SET_THEME = "SET_THEME";

interface SetThemeAction {
  type: typeof SET_THEME;
  payload: "dark" | "light";
}

export type ThemeActionTypes = SetThemeAction;

export const setTheme = (mode: "dark" | "light"): SetThemeAction => ({
  type: SET_THEME,
  payload: mode,
});
