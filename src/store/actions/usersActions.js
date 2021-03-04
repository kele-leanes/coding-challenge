import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN,
  REGISTER,
  SET_ERROR_FALSE,
} from '../types';
import services from '../../services';

export const addUserAction = (email, password) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
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
    console.log('REGISTER OKOKOK', addUser);
  } catch (err) {
    console.log(err);
    if (
      ([Error === 'The email address is already in use by another account'],
      [Error === 'The email address is badly formatted'])
    )
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: console.log('Error message:', err),
      });
  }
};

export const loginUserAction = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const login = await services.auth.signInWithEmailAndPassword(
      email,
      password,
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: login,
    });
    console.log('LOGIN OKOKOKOK', login);
  } catch (err) {
    console.log(err);
    if (
      ([
        Error ===
          'The password is invalid or the user does not have a password.',
      ],
      [
        Error ===
          'There is no user record corresponding to this identifier. The user may have been deleted.',
      ],
      [Error === 'The email address is badly formatted.'])
    ) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Please check your data',
      });
    }
  }
};

export const errorAction = (errorType, error) => async (dispatch) => {
  return {
    type: errorType,
    error: true,
    payload: error,
  };
};

export const setErrorFalse = () => (dispatch) => {
  dispatch({
    type: SET_ERROR_FALSE,
  });
};
