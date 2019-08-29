import { API } from './api';

export default store => next => action => {
  const callApi = action[API];
  if (!callApi) {
    return next(action);
  }
  if (store.getState().auth && store.getState().auth.accessToken) {
    callApi.headers = Object.assign({}, callApi.headers, {
      Authorization: `Bearer ${store.getState().auth.accessToken}`
    });
  }
  return next(action);
};
