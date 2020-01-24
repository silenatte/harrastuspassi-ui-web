import { API, DELETE, GET, POST, PUT } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_HOBBIES = 'FETCH_HOBBIES';
const FETCH_HOBBIES_SUCCESS = 'FETCH_HOBBIES_SUCCESS';
const FETCH_HOBBIES_FAILURE = 'FETCH_HOBBIES_FAILURE';

const FETCH_HOBBY = 'FETCH_HOBBY';
const FETCH_HOBBY_SUCCESS = 'FETCH_HOBBY_SUCCESS';
const FETCH_HOBBY_FAILURE = 'FETCH_HOBBY_FAILURE';

const FETCH_HOBBYEVENTS = 'FETCH_HOBBYEVENTS';
const FETCH_HOBBYEVENTS_SUCCESS = 'FETCH_HOBBYEVENTS_SUCCESS';
const FETCH_HOBBYEVENTS_FAILURE = 'FETCH_HOBBYEVENTS_FAILURE';

const CREATE_HOBBY = 'CREATE_HOBBY';
const CREATE_HOBBY_SUCCESS = 'CREATE_HOBBY_SUCCESS';
const CREATE_HOBBY_FAILURE = 'CREATE_HOBBY_FAILURE';

const CREATE_HOBBYEVENT = 'CREATE_HOBBYEVENT';
const CREATE_HOBBYEVENT_SUCCESS = 'CREATE_HOBBYEVENT_SUCCESS';
const CREATE_HOBBYEVENT_FAILURE = 'CREATE_HOBBYEVENT_FAILURE';

const DELETE_HOBBY = 'DELETE_HOBBY';
const DELETE_HOBBY_SUCCESS = 'DELETE_HOBBY_SUCCESS';
const DELETE_HOBBY_FAILURE = 'DELETE_HOBBY_FAILURE';

const UPDATE_HOBBY = 'UPDATE_HOBBY';
const UPDATE_HOBBY_SUCCESS = 'UPDATE_HOBBY_SUCCESS';
const UPDATE_HOBBY_FAILURE = 'UPDATE_HOBBY_FAILURE';

const UPDATE_HOBBYEVENT = 'UPDATE_HOBBYEVENT';
const UPDATE_HOBBYEVENT_SUCCESS = 'UPDATE_HOBBYEVENT_SUCCESS';
const UPDATE_HOBBYEVENT_FAILURE = 'UPDATE_HOBBYEVENT_FAILURE';

const DELETE_HOBBYEVENT = 'DELETE_HOBBYEVENT';
const DELETE_HOBBYEVENT_SUCCESS = 'DELETE_HOBBYEVENT_SUCCESS';
const DELETE_HOBBYEVENT_FAILURE = 'DELETE_HOBBYEVENT_FAILURE';

const fetchHobbies = () => ({
  [API]: {
    types: [FETCH_HOBBIES, FETCH_HOBBIES_SUCCESS, FETCH_HOBBIES_FAILURE],
    method: GET,
    url: `${API_URL}hobbies/?editable_only=true`
  }
});

const fetchHobby = id => ({
  [API]: {
    types: [FETCH_HOBBY, FETCH_HOBBY_SUCCESS, FETCH_HOBBY_FAILURE],
    method: GET,
    url: `${API_URL}hobbies/${id}/`
  }
});

const fetchHobbyEvents = hobbyId => ({
  [API]: {
    types: [
      FETCH_HOBBYEVENTS,
      FETCH_HOBBYEVENTS_SUCCESS,
      FETCH_HOBBYEVENTS_FAILURE
    ],
    method: GET,
    url: `${API_URL}hobbyevents/?hobby=${hobbyId}`
  }
});

const createHobby = hobby_payload => ({
  [API]: {
    types: [CREATE_HOBBY, CREATE_HOBBY_SUCCESS, CREATE_HOBBY_FAILURE],
    method: POST,
    url: `${API_URL}hobbies/`,
    data: hobby_payload
  }
});

const createHobbyEvent = payload => ({
  [API]: {
    types: [
      CREATE_HOBBYEVENT,
      CREATE_HOBBYEVENT_SUCCESS,
      CREATE_HOBBYEVENT_FAILURE
    ],
    method: POST,
    url: `${API_URL}hobbyevents/`,
    data: payload
  }
});

const updateHobby = (id, data) => ({
  [API]: {
    types: [UPDATE_HOBBY, UPDATE_HOBBY_SUCCESS, UPDATE_HOBBY_FAILURE],
    method: PUT,
    url: `${API_URL}hobbies/${id}/`,
    data
  }
});

const updateHobbyEvent = (id, data) => ({
  [API]: {
    types: [
      UPDATE_HOBBYEVENT,
      UPDATE_HOBBYEVENT_SUCCESS,
      UPDATE_HOBBYEVENT_FAILURE
    ],
    method: PUT,
    url: `${API_URL}hobbyEvents/${id}/`,
    data
  }
});

const deleteHobby = hobby_id => ({
  [API]: {
    types: [DELETE_HOBBY, DELETE_HOBBY_SUCCESS, DELETE_HOBBY_FAILURE],
    method: DELETE,
    url: `${API_URL}hobbies/${hobby_id}/`,
    context: { hobby_id: hobby_id }
  }
});

const deleteHobbyEvent = id => ({
  [API]: {
    types: [
      DELETE_HOBBYEVENT,
      DELETE_HOBBYEVENT_SUCCESS,
      DELETE_HOBBYEVENT_FAILURE
    ],
    method: DELETE,
    url: `${API_URL}hobbyevents/${id}/`,
    context: { hobbyevent_id: id }
  }
});

export {
  CREATE_HOBBY,
  CREATE_HOBBY_SUCCESS,
  CREATE_HOBBY_FAILURE,
  DELETE_HOBBY,
  DELETE_HOBBY_SUCCESS,
  DELETE_HOBBY_FAILURE,
  FETCH_HOBBIES,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE,
  FETCH_HOBBY,
  FETCH_HOBBY_FAILURE,
  FETCH_HOBBY_SUCCESS,
  FETCH_HOBBYEVENTS,
  FETCH_HOBBYEVENTS_FAILURE,
  FETCH_HOBBYEVENTS_SUCCESS,
  DELETE_HOBBYEVENT,
  DELETE_HOBBYEVENT_FAILURE,
  DELETE_HOBBYEVENT_SUCCESS,
  UPDATE_HOBBY,
  UPDATE_HOBBY_FAILURE,
  UPDATE_HOBBY_SUCCESS,
  UPDATE_HOBBYEVENT,
  UPDATE_HOBBYEVENT_FAILURE,
  UPDATE_HOBBYEVENT_SUCCESS,
  createHobby,
  createHobbyEvent,
  deleteHobby,
  fetchHobbies,
  fetchHobby,
  fetchHobbyEvents,
  updateHobby,
  updateHobbyEvent,
  deleteHobbyEvent
};
