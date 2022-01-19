import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ReactComponents from './ReactComponents.js'
// import App from './Project-React';
// import PracticeState from './ReactPractice'
// import App from './React-Tasks/task1';
// import App from './StyleComponent/StylingComponent'
// import App from './Task2-React/Topbar'

import App from'./StyleComponents1/Styles'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
