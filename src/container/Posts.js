import React, { Component } from 'react'
import PostForm from './PostForm';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  //Lifecycle method componentWillMount(); this will display all the stuff from API 
  componentWillMount() {
    console.log("123 yup this component did mount");
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));  //setting the state to the data that comes in 
  }


  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <PostForm />
        <h1>Calendar Post Examples</h1>
        {postItems}
        <p>Check Console to see if it mounts</p>
      </div>
    )
  }
}


export default Posts;