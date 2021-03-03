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
  errorMessage: null,
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
        errorMessage: action.payload,
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
