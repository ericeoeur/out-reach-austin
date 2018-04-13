/*
Component to display single event information. No information is being passed here (yet)
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Events from './event_listing';

var createReactClass = require('create-react-class');

const SingleEvent = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Out-Reach-Austin: Event</Link>
        </h1>
        <p>This is where the single event information will go.</p>
      </div>
    )
  }
});

export default SingleEvent; 