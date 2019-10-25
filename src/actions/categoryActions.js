import { API, DELETE, GET, POST } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

// const CREATE_CATEGORY = 'CREATE_CATEGORY';
// const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
// const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

// const DELETE_CATEGORY = 'DELETE_CATEGORY';
// const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
// const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';

const fetchCategories = () => ({
  [API]: {
    types: [FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE],
    method: GET,
    url: `${API_URL}/hobbycategories/`
  }
});

// const createHobby = hobby_payload => ({
//   [API]: {
//     types: [CREATE_HOBBY, CREATE_HOBBY_SUCCESS, CREATE_HOBBY_FAILURE],
//     method: POST,
//     url: `${API_URL}/hobbies/`,
//     data: hobby_payload
//   }
// });

// const deleteHobby = hobby_id => ({
//   [API]: {
//     types: [DELETE_HOBBY, DELETE_HOBBY_SUCCESS, DELETE_HOBBY_FAILURE],
//     method: DELETE,
//     url: `${API_URL}/hobbies/${hobby_id}/`,
//     context: { hobby_id: hobby_id }
//   }
// });

export {
//   CREATE_HOBBY,
//   CREATE_HOBBY_SUCCESS,
//   CREATE_HOBBY_FAILURE,
//   DELETE_HOBBY,
//   DELETE_HOBBY_SUCCESS,
//   DELETE_HOBBY_FAILURE,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
//   createHobby,
//   deleteHobby,
  fetchCategories
};
