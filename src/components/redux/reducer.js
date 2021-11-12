import { combineReducers } from 'redux';

import counterReducer from './state/counterSlice';
import firstNameReducer from './state/firstNameSlice';
import lastNameReducer from './state/lastNameSlice';
import quizButtonClickedReducer from './state/quizButtonClickedSlice';
import finalMouseReducer from './state/finalMouseSlice';
import scrapedDataReducer from './state/scrapedDataSlice';
import isQuizDoneReducer from './state/isQuizDoneSlice';
import relatedMouseReducer from './state/relatedMouseSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  firstName: firstNameReducer,
  lastName: lastNameReducer,
  quizButtonClicked: quizButtonClickedReducer,
  finalMouse: finalMouseReducer,
  scrapedData: scrapedDataReducer,
  isQuizDone: isQuizDoneReducer,
  relatedMouse: relatedMouseReducer,
});

export default rootReducer;
