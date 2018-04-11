import {FETCH_EVENTS, NEW_EVENT } from '../constants/EventFilters';

const initialState = {
  items: [],
  item: {}
}

//Evaluates what type we are dealing with. 
//Basically if FETCH EVENTS comes through the EventFilter,
//This is the simple action you will do (which is return state)
export default function (state = initialState, action){
  switch(action.type) {
    case FETCH_EVENTS:
      console.log('Event reducer');
      return {
        ...state, 
        items: action.payload
      }
    default: 
      return state;

  }
}