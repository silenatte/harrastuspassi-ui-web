import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import api from './middleware/api';
import hobbyReducer from './reducers/hobbyReducer';

const reducer = combineReducers({
  hobbies: hobbyReducer
});

export default createStore(reducer, applyMiddleware(thunk, api));
