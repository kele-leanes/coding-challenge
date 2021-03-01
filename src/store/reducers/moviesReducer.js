import {GET_MOVIES, GET_MOVIES_BY_NAME} from '../types';

const initialState = {
  movies: [],
  moviesByName: [],
  loading: true,
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
        moviesByName: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
