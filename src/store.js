import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import api from './middleware/api';
import apiAuthHeader from './middleware/apiAuthHeader';
import hobbyReducer from './reducers/hobbyReducer';
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
  auth: authReducer,
  hobbies: hobbyReducer
});

export default createStore(reducer, applyMiddleware(thunk, apiAuthHeader, api));
