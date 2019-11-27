import {
  FETCH_ORGANIZERS,
  FETCH_ORGANIZERS_SUCCESS,
  FETCH_ORGANIZERS_FAILURE,
  CREATE_ORGANIZER_SUCCESS
} from '../actions/organizerActions';

const INITIAL_STATE = {
  organizers: [],
  error: null,
  loading: false
};

const organizerReducer = (state = INITIAL_STATE, action) => {
  let error = null;
  switch (action.type) {
    case FETCH_ORGANIZERS:
      return {
        ...state,
        organizers: [],
        error: null,
        loading: true
      };
    case FETCH_ORGANIZERS_SUCCESS:
      return {
        ...state,
        organizers: action.payload,
        error: null,
        loading: false
      };
    case FETCH_ORGANIZERS_FAILURE:
      error = action.payload; // TODO: how to handle
      return {
        ...state,
        organizers: [],
        error: error,
        loading: false
      };
    case CREATE_ORGANIZER_SUCCESS:
      error = action.payload;
      return {
        ...state,
        organizers: [...state.organizers, action.payload],
        error: error,
        loading: false
      };
    default:
      return state;
  }
};

export default organizerReducer;