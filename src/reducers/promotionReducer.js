import {
  CREATE_PROMOTION_SUCCESS,
  DELETE_PROMOTION_SUCCESS,
  FETCH_PROMOTIONS,
  FETCH_PROMOTIONS_FAILURE,
  FETCH_PROMOTIONS_SUCCESS
} from '../actions/promotionActions';

const INITIAL_STATE = {
  promotions: [],
  error: null,
  loading: false
};

const promotionReducer = (state = INITIAL_STATE, action) => {
  let error = null;
  const { promotions } = state;
  switch (action.type) {
    case FETCH_PROMOTIONS:
      return {
        ...state,
        promotions: [],
        error: null,
        loading: true
      };
    case FETCH_PROMOTIONS_SUCCESS:
      return {
        ...state,
        promotions: action.payload,
        error: null,
        loading: false
      };
    case FETCH_PROMOTIONS_FAILURE:
      error = action.payload; // TODO: how to handle
      return {
        ...state,
        promotions: [],
        error: error,
        loading: false
      };
    case DELETE_PROMOTION_SUCCESS:
      return {
        ...state,
        promotions: promotions.filter(
          promotion => promotion.id !== action.context.promotion_id
        )
      };
    case CREATE_PROMOTION_SUCCESS:
      return {
        ...state,
        promotions: [...state.promotions, action.payload]
      };
    default:
      return state;
  }
};

export default promotionReducer;
