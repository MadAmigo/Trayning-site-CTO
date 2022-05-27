import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store.js';
import {Provider} from 'react-redux';

let rerenderEntireTree =(state)=> {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
<<<<<<< HEAD
    <App store={store}/>
=======
    <App />
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  let state=store.getState()
<<<<<<< HEAD
  rerenderEntireTree(state)})

//var state=window.store.getState()
=======
  rerenderEntireTree(state)})
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
