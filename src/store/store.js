import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import services from './../services';

const initalState = {};

const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(thunk.withExtraArgument(services)),
);

export default store;
