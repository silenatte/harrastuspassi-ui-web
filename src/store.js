import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const fauxReducer = (state = '', action) => {
  return state;
};

const reducer = combineReducers({
  fauxReducer: fauxReducer
});

export default createStore(reducer, applyMiddleware(thunk));
