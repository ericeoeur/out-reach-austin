import React from 'react';
import { Link } from 'react-router-dom';
var createReactClass = require('create-react-class');



const EventList = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Out-Reach-Austin: EventList</Link>
        </h1>
        <p>This is where the event list will go, display all individual events.</p>
      </div>
    )
  }
}); 

export default EventList; 