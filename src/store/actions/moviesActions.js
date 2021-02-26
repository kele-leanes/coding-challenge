import {GET_MOVIES, MOVIES_ERROR} from '../types';
import {BASE_URL, API_KEY} from '../../constants';
import axios from 'axios';

export const getMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + API_KEY);
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
