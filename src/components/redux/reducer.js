import { combineReducers } from 'redux';

import counterReducer from './state/counterSlice';
import firstNameReducer from './state/firstNameSlice';
import lastNameReducer from './state/lastNameSlice';
import quizButtonClickedReducer from './state/quizButtonClickedSlice';
import finalMouseReducer from './state/finalMouseSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  firstName: firstNameReducer,
  lastName: lastNameReducer,
  quizButtonClicked: quizButtonClickedReducer,
  finalMouse: finalMouseReducer,
});

export default rootReducer;
