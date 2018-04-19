/*
Main landing page for app. 
The container components pass data down to other React components.
*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
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

class Main extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      button: PropTypes.string
    }),
  }

  componentWillMount() {
    if (this.props.user !== null) {
      //console.log(this.props.history);
      this.props.history.push('/');
    } else {
      this.props.history.push('/');
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.user !== null){
  //     nextProps.history.push('/');
  //   }
  // }




  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.flex}>
        <div className="col-sm-12 jumbotron" style={{ marginTop: '-10px', marginRight: '20px' }}>
          <h1 style={{ color: '#0D47A1' }}><center>OUT | REACH | AUSTIN  {new Date().getFullYear()}</center></h1>
          <img src="https://gallery.mailchimp.com/f49feb65dbcc84f4b8dfb492c/images/073359bd-13f8-4029-a5af-f3a517babdc9.jpg" width="100%" />
        </div>

        <div style={{ margin: '20px' }}>
          <p>
            This app seeks to help promote local community events for the City of Austin's Asian American Resource Center and the Museums and Cultural Programs Division within the Parks and Recreation Department.
          <br /> <br />
            Add events, meetings, and programs to a department-wide event list. Share flyers for the event and post to popular
          public event calendars such as Do512 and the Austin Chronicle. <br /> <br /> Login with Google below to begin!
        </p>

          <div className="googleLogin">
            <br />
            <Button
              className={classes.button}
              onClick={this.props.googleLogin}
            >
              Login with Google
          </Button>
          </div>

          <div className="comment">
            <br />
            <p style={{ margin: '5px' }}><i>This app is a final project for the October 2017 Coding Bootcamp at UT Austin.  </i></p>
          </div>


        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}


export default connect(mapStateToProps, { googleLogin })(withStyles(styles)(Main)); 