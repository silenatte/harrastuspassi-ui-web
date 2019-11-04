import { API, GET, POST } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

const CREATE_LOCATION = 'CREATE_LOCATION';
const CREATE_LOCATION_SUCCESS = 'CREATE_LOCATION_SUCCESS';
const CREATE_LOCATION_FAILURE = 'CREATE_LOCATION_FAILURE';

const fetchLocations = () => ({
  [API]: {
    types: [FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE],
    method: GET,
    url: `${API_URL}/locations/`
  }
});

const createLocation = data => ({
  [API]: {
    types: [CREATE_LOCATION, CREATE_LOCATION_SUCCESS, CREATE_LOCATION_FAILURE],
    method: POST,
    url: `${API_URL}/locations/`,
    data: data,
  }
});

export {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  CREATE_LOCATION_SUCCESS,
  fetchLocations,
  createLocation
};
