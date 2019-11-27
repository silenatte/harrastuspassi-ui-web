import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import api from './middleware/api';
import apiAuthHeader from './middleware/apiAuthHeader';
import hobbyReducer from './reducers/hobbyReducer';
import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';
import organizerReducer from './reducers/organizerReducer';
import locationReducer from './reducers/locationReducer';
import formReducer from './reducers/formReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  auth: authReducer,
  hobbies: hobbyReducer,
  categories: categoryReducer,
  organizers: organizerReducer,
  locations: locationReducer,
  formData: formReducer
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, apiAuthHeader, api))
  );
