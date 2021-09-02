import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    { id: 1, name: 'Dimon' },
    { id: 2, name: 'Vasa' },
    { id: 6, name: 'Sergey' },
    { id: 9, name: 'Pedro' },
    { id: 9, name: 'Pedro' },
    { id: 9, name: 'Yorik' },
    { id: 2, name: 'janna' },
    

];
let messages = [
    { id: 1, messages: 'Hello' },
    { id: 2, messages: 'Vatsapp' },
    { id: 6, messages: 'Reacr rules' },
    { id: 9, messages: 'Yohoho' }
];

let posts = [
    { id: 1, post: 'Atlas, I started a real job!!!', likes: 999},
    { id: 2, post: 'Second_post!!!', likes: 1},
    { id: 6, post: 'Third_post!!!', likes: -300},
];
ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogs} message={messages} posts={ posts }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
