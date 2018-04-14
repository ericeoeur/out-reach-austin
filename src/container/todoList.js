/*
Simple Todo List example to learn react redux. Reference. 
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todos';

import { fetchEvents } from '../actions/eventActions';

const events = {fetchEvents};
console.log("does this work"); 
console.log(events);

class TodoList extends Component {
  render() {
    
    window.TodoActions = TodoActions;
    window.actions = this.props.actions;

    return <div>
      <h1>Todo List</h1>
      <ul>
        {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
      <button onClick={() => this.props.actions.addTodo("This is adding an item todo.")}> Add Todo  </button>
    </div>
  }
}

//({todos})=>({todos}) //or same as below

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

