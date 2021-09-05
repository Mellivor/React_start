import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import state, { addPost, observer, uppdatePost } from './redux/state';


let rerenderEntireTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} uppdatePost={ uppdatePost }/>
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
  
  );
  
};

observer(rerenderEntireTree);




rerenderEntireTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
