/*
Component to display single event information. No information is being passed here (yet)
The container components pass data down to other React components.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Events from './event_listing';
import ImageUpload from './ImageUpload'; 
import nightmareChronicle from './nightmareChronicle'; 

var createReactClass = require('create-react-class');

const SingleEvent = createReactClass({
  
  
  
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Out-Reach-Austin: Logged Out</Link>
        </h1>
        <p>You have logged out!</p>

      </div>
    )
  }
});

export default SingleEvent; 