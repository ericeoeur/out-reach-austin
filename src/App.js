/*
All Routing goes here. 
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { store } from './store/configureStore';

//The Glue that holds everything together
import { Provider } from "react-redux";

//Import CSS and any Images
import './App.css';
import NavBar from './container/NavBar';
import 'typeface-roboto'

//Import components
import TodoList from "./container/todoList";
import Main from "./container/Main";
import SingleEvent from "./container/SingleEvent";
import EventList from "./container/EventList";
import Posts from "./container/Posts";
import MyComponent from "./container/MyComponent";
import AppBar from "material-ui/AppBar";
import AddEventForm from "./container/AddEventForm";
import EventDetail from "./container/EventDetail";
//import NotFound from "./container/NotFound";

//Set up your routes. Make sure your store is connected in your provider.
const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div style={{ marginLeft: 30 }}>
        <NavBar />
        <Route exact path="/" component={Main} />
        <Route path="/eventlist" component={EventList} />
        <Route path="/posts" component={Posts} />
        <Route path="/MyComponent" component={MyComponent} />
        <Route path="/addevent" component={AddEventForm} />
        <Route path="/events/:id" component={EventDetail} exact={true} />
      </div>
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//           <TodoList />
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
