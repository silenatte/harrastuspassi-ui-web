import { SET_FORM, SET_HOBBYEVENTS_FORM, REMOVE_HOBBYEVENT } from '../actions/formActions';
import { CREATE_HOBBY_SUCCESS } from '../actions/hobbyActions';

const INITIAL_STATE = {
  hobby: {
    name: null,
    location: null,
    cover_image: null,
    description: null,
    organizer: null,
    categories: []
  },
  hobbyEvents: []
}

const hobbyReducer = (state = INITIAL_STATE, action) => {
  let error = null;
  switch (action.type) {
    case SET_FORM:
      return { ...state, hobby: { ...state.hobby, [action.payload.name]: action.payload.value } }
    case SET_HOBBYEVENTS_FORM:
      return {
        ...state, hobbyEvents: [
          ...state.hobbyEvents,
          action.payload
        ]
      }
    case REMOVE_HOBBYEVENT:
      return { ...state, hobbyEvents: action.payload };
    case CREATE_HOBBY_SUCCESS:
      return {
        ...state,
        hobby: { ...state.hobby, id: action.payload.id },
      }
    default:
      return state;
  }
};

export default hobbyReducer;
