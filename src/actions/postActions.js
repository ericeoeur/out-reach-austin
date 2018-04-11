import { FETCH_POSTS, NEW_POSTS } from './types';

//Middleware THUNK allows you 

//each action is a function you can export

//Thunk allows you to call the dispatch function directly so you can make
//a syncronyus request 

export const fetchPosts = () => dispatch => {

  console.log('fetching posts');
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => 
      dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );  //setting the state to the data that comes in 
  //need to dispatch data to the reducer

};