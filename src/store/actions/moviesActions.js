import {GET_MOVIES, MOVIES_ERROR, GET_MOVIES_BY_NAME} from '../types';
import {BASE_URL, API_KEY} from '../../constants';
import axios from 'axios';

export const getMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + 'discover/movie?api_key=' + API_KEY);
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e),
    });
  }
};

export const getMoviesByName = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(
      BASE_URL +
        'search/movie?api_key=' +
        API_KEY +
        '&query=' +
        encodeURIComponent(payload),
    );
    dispatch({
      type: GET_MOVIES_BY_NAME,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e),
    });
  }
};

export const setMoviesByName = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MOVIES_BY_NAME,
      payload,
    });
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e),
    });
  }
};
