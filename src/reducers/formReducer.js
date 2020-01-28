import {
  SET_FORM,
  SET_HOBBYEVENTS_FORM,
  REMOVE_HOBBYEVENT,
  SET_REMOVED_EVENTS,
  SET_PROMOTION_FORM
} from '../actions/formActions';
import {
  CREATE_HOBBY_SUCCESS,
  FETCH_HOBBY_SUCCESS,
  FETCH_HOBBYEVENTS_SUCCESS,
  FETCH_HOBBIES_SUCCESS
} from '../actions/hobbyActions';
import moment from 'moment';
import {
  FETCH_PROMOTION_SUCCESS,
  FETCH_PROMOTIONS_SUCCESS
} from '../actions/promotionActions';

const INITIAL_STATE = {
  hobby: {
    name: null,
    location: null,
    cover_image: null,
    description: '',
    organizer: null,
    categories: []
  },
  hobbyEvents: [],
  removedEvents: [],
  promotion: {
    name: null,
    location: null,
    cover_image: null,
    description: '',
    organizer: null,
    available_count: null
  }
};

const hobbyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        hobby: { ...state.hobby, [action.payload.name]: action.payload.value }
      };
    case SET_HOBBYEVENTS_FORM:
      return {
        ...state,
        hobbyEvents: [...state.hobbyEvents, action.payload]
      };
    case SET_PROMOTION_FORM:
      return {
        ...state,
        promotion: {
          ...state.promotion,
          [action.payload.name]: action.payload.value
        }
      };
    case REMOVE_HOBBYEVENT:
      return { ...state, hobbyEvents: action.payload };
    case CREATE_HOBBY_SUCCESS:
      return {
        ...state,
        hobby: { ...state.hobby, id: action.payload.id }
      };
    case FETCH_HOBBY_SUCCESS:
      return {
        ...state,
        hobby: action.payload
      };
    case FETCH_HOBBYEVENTS_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const events = action.payload.map(event => {
        return {
          ...event,
          start_time: moment(event.start_time, 'HH:mm:ss'),
          end_time: moment(event.end_time, 'HH:mm:ss'),
          start_date: moment(event.start_date, 'YYYY-MM-DD'),
          end_date: moment(event.end_date, 'YYYY-MM-DD')
        };
      });
      return {
        ...state,
        hobbyEvents: events
      };
    case FETCH_PROMOTION_SUCCESS:
      return {
        ...state,
        promotion: {
          ...action.payload,
          start_time: moment(action.payload.start_time, 'HH:mm:ss'),
          end_time: moment(action.payload.end_time, 'HH:mm:ss'),
          start_date: moment(action.payload.start_date, 'YYYY-MM-DD'),
          end_date: moment(action.payload.end_date, 'YYYY-MM-DD')
        }
      };
    case SET_REMOVED_EVENTS:
      return {
        ...state,
        removedEvents: [...state.removedEvents, action.payload]
      };
    case FETCH_HOBBIES_SUCCESS:
      return INITIAL_STATE;
    case FETCH_PROMOTIONS_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default hobbyReducer;
