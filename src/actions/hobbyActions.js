import { API, DELETE, GET, POST } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_HOBBIES = 'FETCH_HOBBIES';
const FETCH_HOBBIES_SUCCESS = 'FETCH_HOBBIES_SUCCESS';
const FETCH_HOBBIES_FAILURE = 'FETCH_HOBBIES_FAILURE';

const CREATE_HOBBY = 'CREATE_HOBBY';
const CREATE_HOBBY_SUCCESS = 'CREATE_HOBBY_SUCCESS';
const CREATE_HOBBY_FAILURE = 'CREATE_HOBBY_FAILURE';

const DELETE_HOBBY = 'DELETE_HOBBY';
const DELETE_HOBBY_SUCCESS = 'DELETE_HOBBY_SUCCESS';
const DELETE_HOBBY_FAILURE = 'DELETE_HOBBY_FAILURE';

const fetchHobbies = () => ({
  [API]: {
    types: [FETCH_HOBBIES, FETCH_HOBBIES_SUCCESS, FETCH_HOBBIES_FAILURE],
    method: GET,
    url: `${API_URL}/hobbies/`
  }
});

const createHobby = hobby_payload => ({
  [API]: {
    types: [CREATE_HOBBY, CREATE_HOBBY_SUCCESS, CREATE_HOBBY_FAILURE],
    method: POST,
    url: `${API_URL}/hobbies/`,
    data: hobby_payload
  }
});

const deleteHobby = hobby_id => ({
  [API]: {
    types: [DELETE_HOBBY, DELETE_HOBBY_SUCCESS, DELETE_HOBBY_FAILURE],
    method: DELETE,
    url: `${API_URL}/hobbies/${hobby_id}/`,
    context: { hobby_id: hobby_id }
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
  createHobby,
  deleteHobby,
  fetchHobbies
};
