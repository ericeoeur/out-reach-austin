import {FETCH_EVENTS, NEW_EVENT } from '../actions/types';

const initialState = {
  items: [],
  item: {},
}

//Evaluates what type we are dealing with. 
export default function(state = initialState, action){
  switch(action.type) {
    default: 
      return state;

  }
}