import {GET_MOVIES, GET_MOVIES_BY_NAME, MOVIES_ERROR} from '../types';

const initialState = {
  movies: [],
  loading: true,
  hasError: false,
  errorMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case GET_MOVIES_BY_NAME:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
