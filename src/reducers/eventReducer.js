/*
Important. This is the reducers for ALL Events. 
Each case needs to be updated to reflect actual actions. 
*/


import {FETCH_EVENTS, NEW_EVENT, EDIT_EVENT, DELETE_EVENT } from '../constants/EventFilters';

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

      case NEW_EVENT: 
      console.log('NEW_EVENT REDUCER');
      return {
        ...state,
        item: action.payload
      }

      case EDIT_EVENT:
      console.log('EDIT_EVENT REDUCER');
      return {
        ...state, 
        item: action.payload
      }

      case DELETE_EVENT:
      console.log('DELETE_EVENT REDUCER');
      return {
        ...state, 
        item: action.payload
      }
    default: 
      return state;
  }
}