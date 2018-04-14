/*
Component to display single event information. No information is being passed here (yet)
The container components pass data down to other React components.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Events from './event_listing';
import ImageUpload from './ImageUpload'; 

var createReactClass = require('create-react-class');

const SingleEvent = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Out-Reach-Austin: Event</Link>
        </h1>
        <p>This is where the image upload will be (For now).</p>
        <ImageUpload /> 
      </div>
    )
  }
});

export default SingleEvent; 