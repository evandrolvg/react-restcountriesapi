import { combineReducers } from 'redux';
import favReducer from './reducers/favReducer';
import setCountriesReducer from './reducers/setCountriesReducer';
import changeThemeReducer from './reducers/changeThemeReducer';

const Reducers = combineReducers({
  favReducer,
  setCountriesReducer,
  changeThemeReducer
});

export default Reducers;
