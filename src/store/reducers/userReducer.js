import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCES,
  SET_ERROR_FALSE,
} from '../types';

const initialState = {
  email: '',
  password: '',
  name: '',
  errorMessage: null,
  hasError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILURE: {
      return {
        initialState,
        errorMessage: action.payload,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        initialState,
        hasError: true,
        errorMessage: action.payload,
      };
    }
    case SET_ERROR_FALSE: {
      return {
        ...state,
        hasError: false,
        errorMessage: null,
      };
    }
    case LOGIN_SUCCES: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return {...state};
  }
}
