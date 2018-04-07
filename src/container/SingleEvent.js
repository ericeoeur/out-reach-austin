import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from './todoList'; //This is an exmaple of how react works, passing components that work in other areas. 
var createReactClass = require('create-react-class');

const SingleEvent = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Out-Reach-Austin: Event</Link>
        </h1>
        <p>This is where the single event information will go.</p>
        {<TodoList /> }
      </div>
    )
  }
}); 

export default SingleEvent; 