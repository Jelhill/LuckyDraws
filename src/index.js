import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux"
import modalReducer from "./Reducers/modalReducer"
import lotteryReducer from "./Reducers/lotteryReducer"
import userReducer from "./Reducers/userReducer"

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from "react-router-dom"

const rootReducer = combineReducers({
  modalReducer, 
  lotteryReducer,
  userReducer
})
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>  
    <Provider store={store}>
    <Router>
      <App />
    </Router>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
