import {
    // DELETE_HOBBY_SUCCESS,
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../actions/categoryActions';

const INITIAL_STATE = {
    categories: [],
    error: null,
    loading: false
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    let error = null;
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: [],
                error: null,
                loading: true
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                error: null,
                loading: false
            };
        case FETCH_CATEGORIES_FAILURE:
            error = action.payload; // TODO: how to handle
            return {
                ...state,
                categories: [],
                error: error,
                loading: false
            };
        // case DELETE_HOBBY_SUCCESS:
        //     const categories = state.categories.filter(
        //         hobby => hobby.id !== action.context.hobby_id
        //     );
        //     return {
        //         ...state,
        //         categories: categories
        //     };
        default:
            return state;
    }
};

export default categoryReducer;
