import {
  FETCH_HOBBIES,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE
} from '../actions/hobbyActions';

const INITIAL_STATE = {
  hobbies: [],
  error: null,
  loading: false
};

const hobbyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_HOBBIES:
      return {
        ...state,
        hobbies: [],
        error: null,
        loading: true
      };
    case FETCH_HOBBIES_SUCCESS:
      return {
        ...state,
        hobbies: action.payload,
        error: null,
        loading: false
      };
    case FETCH_HOBBIES_FAILURE:
      const error = action.payload; // TODO: how to handle
      return {
        ...state,
        hobbies: [],
        error: error,
        loading: false
      };
    default:
      return state;
  }
};

export default hobbyReducer;
