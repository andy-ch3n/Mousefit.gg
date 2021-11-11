import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import './QuizPage.scss';
import './StarBackground.sass';
import store from './components/redux/store.js';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = {store} >
    <App />
    </Provider>
    ,
  document.getElementById('root')
);



