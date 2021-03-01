import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCES,
} from '../types';

const initialState = {
  email: '',
  password: '',
  name: '',
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FAILURE: {
      return {...initialState};
    }
    case REGISTER_SUCCESS: {
      return {...state};
    }
    case LOGIN_FAILURE: {
      return {initialState};
    }
    case LOGIN_SUCCES: {
      return {...state};
    }
    default:
      return {...state};
  }
};
