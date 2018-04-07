import React from 'react';
import { Link } from 'react-router-dom';
var createReactClass = require('create-react-class');

const Main = createReactClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Out-Reach-Austin App!</Link>
          <p>This is the main page of the app. Likely the login interface will go here.</p>
          <p>Create login component using firebase; github, feisbuk and twitter</p>
        </h1>
      </div>
    )
  }
}); 

export default Main; 