import {combineReducers} from 'redux';
import {reducer as formReducer} from 'react-final-form';
import moviesReducer from './moviesReducer';
import userReducer from './userReducer';

export default combineReducers({
  movies: moviesReducer,
  user: userReducer,
});
