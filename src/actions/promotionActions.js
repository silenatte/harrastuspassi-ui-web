import { API, DELETE, GET, POST, PUT } from '../middleware/api';
import { API_URL } from '../config';

const FETCH_PROMOTIONS = 'FETCH_PROMOTIONS';
const FETCH_PROMOTIONS_SUCCESS = 'FETCH_PROMOTIONS_SUCCESS';
const FETCH_PROMOTIONS_FAILURE = 'FETCH_PROMOTIONS_FAILURE';

const FETCH_PROMOTION = 'FETCH_PROMOTION';
const FETCH_PROMOTION_SUCCESS = 'FETCH_PROMOTION_SUCCESS';
const FETCH_PROMOTION_FAILURE = 'FETCH_PROMOTION_FAILURE';

const CREATE_PROMOTION = 'CREATE_PROMOTION';
const CREATE_PROMOTION_SUCCESS = 'CREATE_PROMOTION_SUCCESS';
const CREATE_PROMOTION_FAILURE = 'CREATE_PROMOTION_FAILURE';

const DELETE_PROMOTION = 'DELETE_PROMOTION';
const DELETE_PROMOTION_SUCCESS = 'DELETE_PROMOTION_SUCCESS';
const DELETE_PROMOTION_FAILURE = 'DELETE_PROMOTION_FAILURE';

const UPDATE_PROMOTION = 'UPDATE_PROMOTION';
const UPDATE_PROMOTION_SUCCESS = 'UPDATE_PROMOTION_SUCCESS';
const UPDATE_PROMOTION_FAILURE = 'UPDATE_PROMOTION_FAILURE';

const fetchPromotions = () => ({
  [API]: {
    types: [
      FETCH_PROMOTIONS,
      FETCH_PROMOTIONS_SUCCESS,
      FETCH_PROMOTIONS_FAILURE
    ],
    method: GET,
    url: `${API_URL}promotions/?editable_only=true`
  }
});

const fetchPromotion = id => ({
  [API]: {
    types: [FETCH_PROMOTION, FETCH_PROMOTION_SUCCESS, FETCH_PROMOTION_FAILURE],
    method: GET,
    url: `${API_URL}promotions/${id}/`
  }
});

const createPromotion = promotion_payload => ({
  [API]: {
    types: [
      CREATE_PROMOTION,
      CREATE_PROMOTION_SUCCESS,
      CREATE_PROMOTION_FAILURE
    ],
    method: POST,
    url: `${API_URL}promotions/`,
    data: promotion_payload
  }
});

const updatePromotion = (id, data) => ({
  [API]: {
    types: [
      UPDATE_PROMOTION,
      UPDATE_PROMOTION_SUCCESS,
      UPDATE_PROMOTION_FAILURE
    ],
    method: PUT,
    url: `${API_URL}promotions/${id}/`,
    data
  }
});

const deletePromotion = promotion_id => ({
  [API]: {
    types: [
      DELETE_PROMOTION,
      DELETE_PROMOTION_SUCCESS,
      DELETE_PROMOTION_FAILURE
    ],
    method: DELETE,
    url: `${API_URL}promotions/${promotion_id}/`,
    context: { promotion_id: promotion_id }
  }
});

export {
  CREATE_PROMOTION,
  CREATE_PROMOTION_SUCCESS,
  CREATE_PROMOTION_FAILURE,
  DELETE_PROMOTION,
  DELETE_PROMOTION_SUCCESS,
  DELETE_PROMOTION_FAILURE,
  FETCH_PROMOTIONS,
  FETCH_PROMOTIONS_SUCCESS,
  FETCH_PROMOTIONS_FAILURE,
  FETCH_PROMOTION,
  FETCH_PROMOTION_FAILURE,
  FETCH_PROMOTION_SUCCESS,
  UPDATE_PROMOTION,
  UPDATE_PROMOTION_FAILURE,
  UPDATE_PROMOTION_SUCCESS,
  createPromotion,
  deletePromotion,
  fetchPromotions,
  fetchPromotion,
  updatePromotion
};
