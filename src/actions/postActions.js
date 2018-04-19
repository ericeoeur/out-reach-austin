import {
  FETCH_POSTS,
  NEW_POSTS
} from './types';

//Middleware THUNK allows you to call the dispatch function directly so you can make
//a syncronyus request 

//each action is a function you can export.


export const fetchPosts = () => dispatch => {

  // console.log('fetching posts');
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    ); //setting the state to the data that comes in 
  //need to dispatch data to the reducer

};

export const createPost = (postData) => dispatch => {

  console.log('create Post /fetching posts');
  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POSTS,
      payload: post
    }));

};