/*
Main landing page for app. 
The container components pass data down to other React components.
*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { googleLogin } from '../actions/userAction';
import { blue } from 'material-ui/colors'

var createReactClass = require('create-react-class');

const styles = {
  button: {
    backgroundColor: '#2196f3',
    color: 'white'
  },
  spacing: {
    margin: 'auto'
  },
  
}

class Main extends React.Component{
  static propTypes = {
    classes: PropTypes.shape({
      button: PropTypes.string
    }),
    
  }
  render() {
    const  classes = this.props.classes;
    return (
      <div className={classes.flex}>

        <h1>
          <Link to="/">Out-Reach-Austin App!</Link>
          <br/>

          Login with Google to access the application.
        </h1>

        <div className="googleLogin"> 
          <Button
          className={classes.button}
            onClick={this.props.googleLogin}
          >
            Login with Google!
          </Button>
        
        </div>
      </div>
    )
  }
}

export default connect(null, {googleLogin})(withStyles(styles)(Main)); 