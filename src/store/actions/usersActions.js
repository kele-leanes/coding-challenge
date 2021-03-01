import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../types';
import services from '../../services';

export const addUserAction = (email, password) => async (dispatch) => {
  try {
    const addUser = await services.auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    console.log(addUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addUser,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: REGISTER_FAILURE,
      payload: err,
    });
  }
};

export const loginUserAction = (email, password) => async (dispatch) => {
  try {
    const login = await services.auth.signInWithEmailAndPassword(
      email,
      password,
    );
    console.log(login);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: login,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};
