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
          <Link to="/">Out-Reach-Austin: EventList</Link>
        </h1>
        <p>This is where the event list will go, display all individual events.</p>
        <p>The events below are pulling from the Out-Reach-Austin_DB:"</p>
      <Events />
      </div>
    )
  }
}); 

export default EventList; 