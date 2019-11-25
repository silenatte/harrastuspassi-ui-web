import { API, GET, POST } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_ORGANIZERS = 'FETCH_ORGANIZERS';
const FETCH_ORGANIZERS_SUCCESS = 'FETCH_ORGANIZERS_SUCCESS';
const FETCH_ORGANIZERS_FAILURE = 'FETCH_ORGANIZERS_FAILURE';

const CREATE_ORGANIZER = 'CREATE_ORGANIZER';
const CREATE_ORGANIZER_SUCCESS = 'CREATE_ORGANIZER_SUCCESS';
const CREATE_ORGANIZER_FAILURE = 'CREATE_ORGANIZER_FAILURE';

const fetchOrganizers = () => ({
  [API]: {
    types: [FETCH_ORGANIZERS, FETCH_ORGANIZERS_SUCCESS, FETCH_ORGANIZERS_FAILURE],
    method: GET,
    url: `${API_URL}organizers/`
  }
});

const createOrganizer = organizer_payload => ({
  [API]: {
    types: [CREATE_ORGANIZER, CREATE_ORGANIZER_SUCCESS, CREATE_ORGANIZER_FAILURE],
    method: POST,
    url: `${API_URL}organizers/`,
    data: organizer_payload,
  }
});


export {
  FETCH_ORGANIZERS,
  FETCH_ORGANIZERS_SUCCESS,
  FETCH_ORGANIZERS_FAILURE,
  CREATE_ORGANIZER_SUCCESS,
  fetchOrganizers,
  createOrganizer
};
