import * as actionTypes from "./constants";

interface ChangeLanguageAction {
  type: typeof actionTypes.CHANGE_LANGUAGE;
  payload: "zh" | "en";
}

interface AddLanguageAction {
  type: typeof actionTypes.ADD_LANGUAGE;
  payload: { name: string; code: string };
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageAction = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => ({
  type: actionTypes.CHANGE_LANGUAGE,
  payload: languageCode,
});

export const addLanguageAction = (
  name: string,
  code: string
): AddLanguageAction => ({
  type: actionTypes.ADD_LANGUAGE,
  payload: { name, code },
});
