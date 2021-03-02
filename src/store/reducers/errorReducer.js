import {REGISTER_FAILURE} from '../types';

export default function (state, action) {
  if (!action.error) {
    return {
      ...state,
      error: null,
    };
  }
  return {
    ...state,
    error: {
      errorMessage: REGISTER_FAILURE,
      ...action.payload,
    },
  };
}
