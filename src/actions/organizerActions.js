import { API, GET } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_ORGANIZERS = 'FETCH_ORGANIZERS';
const FETCH_ORGANIZERS_SUCCESS = 'FETCH_ORGANIZERS_SUCCESS';
const FETCH_ORGANIZERS_FAILURE = 'FETCH_ORGANIZERS_FAILURE';

const fetchOrganizers = () => ({
  [API]: {
    types: [FETCH_ORGANIZERS, FETCH_ORGANIZERS_SUCCESS, FETCH_ORGANIZERS_FAILURE],
    method: GET,
    url: `${API_URL}/organizers/`
  }
});


export {
  FETCH_ORGANIZERS,
  FETCH_ORGANIZERS_SUCCESS,
  FETCH_ORGANIZERS_FAILURE,
  fetchOrganizers
};
