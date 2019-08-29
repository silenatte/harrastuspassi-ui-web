import jwt from 'jsonwebtoken';
import {
  FETCH_TOKEN,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE
} from '../actions/authActions';
import { LOGIN_URL } from '../config';

const INITIAL_STATE = {
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  loading: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        user: null,
        authToken: null,
        refreshToken: null,
        error: null,
        loading: true
      };
    case FETCH_TOKEN_SUCCESS:
      const accessTokenPayload = jwt.decode(action.payload.access);
      const user = {
        id: accessTokenPayload.user_id,
        firstName: accessTokenPayload.first_name,
        lastName: accessTokenPayload.last_name
      };
      return {
        ...state,
        user: user,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
        error: null,
        loading: null
      };
    case FETCH_TOKEN_FAILURE:
      // if for any we can't get a token, forward to the login page
      window.location = LOGIN_URL;
      return state;
    default:
      return state;
  }
};

export default authReducer;
