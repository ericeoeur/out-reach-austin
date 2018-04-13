/*
All Routing goes here. 
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//The Glue that holds everything together
import { Provider } from 'react-redux';

//Import CSS and any Images
import './App.css';

//Import components
import TodoList from './container/todoList';
import Main from './container/Main';
import SingleEvent from './container/SingleEvent';
import EventList from './container/EventList';
import Posts from "./container/Posts";
import AddEventForm from "./container/AddEventForm";

//Set up your routes. Make sure your store is connected in your provider.
const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/event">Single Event</Link></li>
          <li><Link to="/eventlist">Event List</Link></li>
          <li><Link to="/todolist">TodoList</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/addevent">Add Event</Link></li>
        </ul>
        <hr />

        <Route exact path="/" component={Main} />
        <Route path="/event" component={SingleEvent} />
        <Route path="/eventlist" component={EventList} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/posts" component={Posts} />
        <Route path="/addevent" component={AddEventForm} />
      </div>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes








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