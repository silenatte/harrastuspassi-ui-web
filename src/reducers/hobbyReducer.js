import {
  DELETE_HOBBY_SUCCESS,
  FETCH_HOBBIES,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE,
  CREATE_HOBBY_SUCCESS
} from '../actions/hobbyActions';

const INITIAL_STATE = {
  hobbies: [],
  error: null,
  loading: false
};

const hobbyReducer = (state = INITIAL_STATE, action) => {
  let error = null;
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
      error = action.payload; // TODO: how to handle
      return {
        ...state,
        hobbies: [],
        error: error,
        loading: false
      };
    case DELETE_HOBBY_SUCCESS:
      const hobbies = state.hobbies.filter(
        hobby => hobby.id !== action.context.hobby_id
      );
      return {
        ...state,
        hobbies: hobbies
      };
    case CREATE_HOBBY_SUCCESS:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload]
      }
    default:
      return state;
  }
};

export default hobbyReducer;
