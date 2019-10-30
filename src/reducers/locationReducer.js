import {
    FETCH_LOCATIONS,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE
  } from '../actions/locationActions';

  const INITIAL_STATE = {
    locations: [],
    error: null,
    loading: false
  };

  const locationReducer = (state = INITIAL_STATE, action) => {
    let error = null;
    switch (action.type) {
      case FETCH_LOCATIONS:
        return {
          ...state,
          locations: [],
          error: null,
          loading: true
        };
      case FETCH_LOCATIONS_SUCCESS:
        return {
          ...state,
          locations: action.payload,
          error: null,
          loading: false
        };
      case FETCH_LOCATIONS_FAILURE:
        error = action.payload; // TODO: how to handle
        return {
          ...state,
          locations: [],
          error: error,
          loading: false
        };
      default:
        return state;
    }
  };

  export default locationReducer;