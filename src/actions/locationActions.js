import { API, GET } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

const fetchLocations = () => ({
  [API]: {
    types: [FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE],
    method: GET,
    url: `${API_URL}/locations/`
  }
});


export {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  fetchLocations
};
