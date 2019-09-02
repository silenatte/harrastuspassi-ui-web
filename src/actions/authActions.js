import { API, GET } from '../middleware/api';
import { TOKEN_URL } from '../config';

const FETCH_TOKEN = 'FETCH_TOKEN';
const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';

// Cookies?
const fetchToken = () => ({
  [API]: {
    types: [FETCH_TOKEN, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE],
    method: GET,
    url: `${TOKEN_URL}`,
    withCredentials: true
  }
});

export { FETCH_TOKEN, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE, fetchToken };
