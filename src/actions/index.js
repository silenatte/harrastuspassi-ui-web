import * as hobbyActions from './hobbyActions';
import * as authActions from './authActions';
import * as categoryActions from './categoryActions';

// Remember to watch for naming collision
const ActionCreators = {
  ...hobbyActions,
  ...authActions,
  ...categoryActions
};

export default ActionCreators;
