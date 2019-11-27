import { API, GET } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

const fetchCategories = () => ({
  [API]: {
    types: [FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE],
    method: GET,
    url: `${API_URL}hobbycategories/`
  }
});

export {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  fetchCategories
};
