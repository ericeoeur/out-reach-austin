/*
Page where all events will go. 
The container components pass data down to other React components.
*/


import React from 'react';
import { Link } from 'react-router-dom';
import Events from './event_listing';
var createReactClass = require('create-react-class');


const EventList = createReactClass({
  render() {
    return (
      <div>
        <h1>
          Upcoming Events
        </h1>
      <Events />
      </div>
    )
  }
}); 

export default EventList; 