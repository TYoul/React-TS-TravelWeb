import * as actionTypes from "./constants";
import { LanguageActionTypes } from "./languageActions";

export interface languageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: languageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

const languageReducer = (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case actionTypes.ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};

export default languageReducer;
