import * as hobbyActions from './hobbyActions';
import * as authActions from './authActions';

// Remember to watch for naming collision
const ActionCreators = {
  ...hobbyActions,
  ...authActions
};

export default ActionCreators;
