import axios from 'axios';

export const GET = 'get';
export const PUT = 'put';
export const POST = 'post';
export const DELETE = 'delete';

export const API = 'Call API';

export default store => dispatch => action => {
  const callAPI = action[API];

  if (!callAPI) {
    return dispatch(action);
  }

  // Using url
  if (!callAPI.url) {
    throw new Error('Missing URL');
  }

  // Using method
  if (
    !callAPI.method ||
    (callAPI.method !== GET &&
      callAPI.method !== POST &&
      callAPI.method !== PUT &&
      callAPI.method !== DELETE)
  ) {
    throw new Error('Missing HTTP method');
  }

  // Using three types: request, success and fail
  if (!callAPI.types || callAPI.types.length !== 3) {
    throw new Error('Invalid action types');
  }

  // Data merge
  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[API];
    return finalAction;
  };

  const [requestType, successType, failType] = callAPI.types;

  // Dispatch action
  const requestAction = actionWith({
    ...callAPI,
    type: requestType
  });
  dispatch(requestAction);

  // The actual HTTP request
  return axios({
    url: callAPI.url,
    method: callAPI.method,
    data: callAPI.data,
    params: callAPI.params
  })
    .then(response => response.data)
    .then(data => {
      dispatch(
        actionWith({
          ...callAPI,
          type: successType,
          payload: data
        })
      );
    })
    .catch(error => {
      if (!error.response) {
        console.error(error);
      } else {
        dispatch(
          actionWith({
            ...callAPI,
            type: failType,
            status: error.response.status,
            payload: error.response.data
          })
        );
      }
    });
};
