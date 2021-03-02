import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  movies: moviesReducer,
  user: userReducer,
  error: errorReducer,
});
