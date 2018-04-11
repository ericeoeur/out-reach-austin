import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
  items: [], //this array represents the posts that will be coming in via our action. (thats where the fetch request will be. )
  item: {} //this represents the post (single) when we add. 
}

//this evaluates what type we are dealing with
export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS: 
    console.log('Post reducer'); 
      return {
        ...state, 
        items: action.payload
      }
    default: 
      return state; 
  }
}
