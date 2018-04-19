import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './App';
//import rootReducer from './reducers/index.js';
//import EventList from './container/EventList';
import registerServiceWorker from './registerServiceWorker';
//import { Provider } from 'react-redux'; 
import store from './store/configureStore';
//import thunk from 'redux-thunk';
//const store = configureStore(); 
//import configureStore from './store/configureStore';
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';
import {blue} from 'material-ui/colors';
//const store = configureStore(); 
const theme = createMuiTheme({
  palette: createPalette({
    primary: blue,
  }),
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}><Routes store={store} /></MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
