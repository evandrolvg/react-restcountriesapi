import { defineState } from 'redux-localstore';
import { CHANGE_THEME } from '../actions/actionTypes';
import Config from '../../Config';

const defaultState = {
  theme: Config.INITIAL_THEME
};

const initialState = defineState(defaultState)('changeThemeReducer');

const changeThemeReducer = (state = initialState, action) => {
  const newTheme =
    state.theme.title === Config.THEMES[0].title ? Config.THEMES[1] : Config.THEMES[0];

  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: newTheme
      };
    default:
      return state;
  }
};

export default changeThemeReducer;
