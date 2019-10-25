import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import api from './middleware/api';
import apiAuthHeader from './middleware/apiAuthHeader';
import hobbyReducer from './reducers/hobbyReducer';
import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  auth: authReducer,
  hobbies: hobbyReducer,
  categories: categoryReducer
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, apiAuthHeader, api))
  );
