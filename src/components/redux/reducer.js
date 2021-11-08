import { combineReducers } from 'redux';

import counterReducer from './state/counterSlice';
import firstNameReducer from './state/firstNameSlice';
import lastNameReducer from './state/lastNameSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  firstName: firstNameReducer,
  lastName: lastNameReducer,
});

export default rootReducer;
