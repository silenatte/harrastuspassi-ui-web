import * as hobbyActions from './hobbyActions';
import * as authActions from './authActions';
import * as categoryActions from './categoryActions';
import * as organizerActions from './organizerActions';
import * as locationActions from './locationActions';
import * as formActions from './formActions';

// Remember to watch for naming collision
const ActionCreators = {
  ...hobbyActions,
  ...authActions,
  ...categoryActions,
  ...organizerActions,
  ...locationActions,
  ...formActions
};

export default ActionCreators;
