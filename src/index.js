import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './App';
import App from './App';
import rootReducer from './reducers/index.js';
import EventList from './container/EventList';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';

const store = configureStore(); 


ReactDOM.render(
  <Routes store={store} />,
  document.getElementById('root'));
registerServiceWorker();
