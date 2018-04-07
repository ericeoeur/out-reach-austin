import React, { Component } from 'react'

class Posts extends Component {
  componentWillMount() {
    console.log("123 yup this component did mount"); 
  }
  render() {
    return (
      <div>
        <h1>Calendar Post Examples</h1>
        <p>Check Console to see if it mounts</p>
      </div>
    )
  }
}


export default Posts;