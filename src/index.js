import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
// import './QuizPage.css';
import './QuizPage.scss';
import './QuizP.sass';
import store from './components/redux/store.js';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = {store} >
    <App />
    </Provider>
    ,
  document.getElementById('root')
);


// // serviceWorker.unregister()

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
