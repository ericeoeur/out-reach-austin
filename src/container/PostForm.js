/*
Simple Todo List component example to learn react redux. 
The container components pass data down to other React components.
*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventActions from '../constants/EventFilters';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //set e.target value to be able to type into the form 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  //When console.logging this it works!!!
  onSubmit(e) {
    e.preventDefault();

    
    //update the post variable with state in order to push it to the API and replace
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    //call action here-- previously the fetch request was here.
    this.props.createPost(post);

    }

  //render your calendar form here, perhaps pull it within it's own page until we are able to build a modal around it? 
  //Keep your components separate -- easier to find things and make sure it works. 
  render() {
    return (
      <div>
        <h1>Post Todo Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label><br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body:</label><br />
            <textarea name="body" onChange={this.onChange} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   };
// }

// function mapDispachToProps(dispatch) {
//   return {
//     actions: bindActionCreators(EventActions, dispatch)
//   };

// }

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};



//export default connect(mapStateToProps, mapDispachToProps)(PostForm);
export default connect(null, {createPost})(PostForm);

//export default PostForm;