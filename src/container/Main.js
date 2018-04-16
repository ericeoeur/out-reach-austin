/*
Main landing page for app. 
The container components pass data down to other React components.
*/


import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { googleLogin } from '../actions/userAction';

var createReactClass = require('create-react-class');

const Main = createReactClass({
  render() {
    return (
      <div>
      <br />
      <br /> 
      <br />
      <br/>
        <h1>
          <Link to="/">Out-Reach-Austin App!</Link>
          <br/>

          Login with Google to access the application.
        </h1>

        <div className="googleLogin">
          <button className="google" onClick={this.props.googleLogin}>Login with Google!</button>
        
        </div>
      </div>
    )
  }
}); 

export default connect(null, {googleLogin})(Main); 