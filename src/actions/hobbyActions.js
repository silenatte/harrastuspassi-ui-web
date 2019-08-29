import { API, DELETE, GET } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_HOBBIES = 'FETCH_HOBBIES';
const FETCH_HOBBIES_SUCCESS = 'FETCH_HOBBIES_SUCCESS';
const FETCH_HOBBIES_FAILURE = 'FETCH_HOBBIES_FAILURE';

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

const deleteHobby = hobby_id => ({
  [API]: {
    types: [DELETE_HOBBY, DELETE_HOBBY_SUCCESS, DELETE_HOBBY_FAILURE],
    method: DELETE,
    url: `${API_URL}/hobbies/${hobby_id}/`,
    context: { hobby_id: hobby_id }
  }
});

export {
  FETCH_HOBBIES,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE,
  DELETE_HOBBY,
  DELETE_HOBBY_SUCCESS,
  DELETE_HOBBY_FAILURE,
  deleteHobby,
  fetchHobbies
};
