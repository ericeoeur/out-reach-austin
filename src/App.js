import React, { Component } from 'react';
import { bindActionCreators } from 'react-redux';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

//Import CSS and any Images
import logo from './logo.svg';
import './App.css';

//Import components
import TodoList from './container/todoList';
import Main from './container/Main';
import SingleEvent from './container/SingleEvent';
import EventList from './container/EventList';


//Set up your routes 

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/event">Single Event</Link></li>
        <li><Link to="/eventlist">Event List</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>

      </ul>

      <hr/>

      <Route exact path="/" component={Main}/>
      <Route path="/event" component={SingleEvent}/>
      <Route path="/eventlist" component={EventList}/>
      <Route path="/todolist" component={TodoList}/>

    </div>
  </Router>
)
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
