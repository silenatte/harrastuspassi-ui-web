import { API, GET } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_HOBBIES = 'FETCH_HOBBIES';
const FETCH_HOBBIES_SUCCESS = 'FETCH_HOBBIES_SUCCESS';
const FETCH_HOBBIES_FAILURE = 'FETCH_HOBBIES_FAILURE';

const fetchHobbies = () => ({
  [API]: {
    types: [FETCH_HOBBIES, FETCH_HOBBIES_SUCCESS, FETCH_HOBBIES_FAILURE],
    method: GET,
    url: `${API_URL}/hobbies/`
  }
});

export {
  FETCH_HOBBIES,
  FETCH_HOBBIES_SUCCESS,
  FETCH_HOBBIES_FAILURE,
  fetchHobbies
};
