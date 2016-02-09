import { routeReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import transactions from './transactions';

/**
 * Routing to be implemented
 */
export default combineReducers({
  routing,
  transactions
});
