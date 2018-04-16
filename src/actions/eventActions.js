/*
These are the actions that will handle the event database information. 
It is expected that each (simple) action is a function that pulls data from the API,
then dispatched via Middleware: THUNK.
*/

// Import your Event Filters here
import { FETCH_EVENTS, NEW_EVENT, EDIT_EVENT, DELETE_EVENT } from '../constants/EventFilters';
import { database } from '../firebase'
import _ from 'lodash';

//Export a Function that pulls the data from the SQL API
//When you get the data, dispatch it (Middleware: THUNK) to
// container/event_listing.js 

//This is the action that works with the fetch for FIREBASE 
export const fetchEvents = () => dispatch => {
  console.log("fetching events FIREBASE (action: fetchEvent)");

  database.on('value', snapshot => {
    dispatch({
      type: FETCH_EVENTS,
      payload: snapshot.val()
    })
  })
};

//Below is the createaction for FIREBASE 
export const createEvent = (newEvent) => dispatch => {
  console.log("fetching events (action: createEvent)");
  database.push(newEvent, snapshot => {
    dispatch({
      type: NEW_EVENT,
      payload: newEvent
    })
  });
};

export const deleteEvent = (id) => dispatch => {
  alert("Deleting your event was successful.");
  console.log(id); //pass the id from the event and make sure it shows up
  database.child(id).remove(); //removes the event
  console.log("deleting event(action: deleteEvent)"); //makes myself feel that this is actually working/called on
};

// export const deleteEvent = (id) => dispatch => {
//   console.log("deleting event(action: deleteEvent)"); 
//   const deleteData = {};
//   deleteData[id] = null;
//   return database.child(id).update(deleteData);
//   //return database.child(id).update(null); // this returns a promise
//  };


export const editEvent = (id, eventData) => dispatch => {
  alert("Updating your event was successful.");
  console.log(id);//when u come back check data passing
  console.log(eventData);//this is passing data
  console.log("editing event (action: editEvent)");
  database.child(id).update(eventData);

};
