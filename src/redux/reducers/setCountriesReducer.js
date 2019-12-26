import { defineState } from 'redux-localstore';
import { LOAD_COUNTRIES } from '../actions/actionTypes';

const defaultState = {
  countries: []
};

const initialState = defineState(defaultState)('setCountriesReducer');

const setCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
    default:
      return state;
  }
};

export default setCountriesReducer;
