/*
These are the actions that will handle the event database information. 
It is expected that each (simple) action is a function that pulls data from the API,
then dispatched via Middleware: THUNK.
*/



// Import your Event Filters here
import { FETCH_EVENTS, NEW_EVENT, EDIT_EVENT, DELETE_EVENT } from '../constants/EventFilters';

//Export a Function that pulls the data from the SQL API
//When you get the data, dispatch it (Middleware: THUNK) to
// container/event_listing.js 

export const fetchEvents = () => dispatch => {
  console.log("fetching events (action: fetchEvent)");
      fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(events => 
        dispatch({
        type: FETCH_EVENTS,
        payload: events.data
      })
    ); 
};

export const createEvent = (eventData) => dispatch => {
  console.log("fetching events (action: createEvent)");
      fetch(`http://localhost:4000/events/add?`, {
        method: 'POST',
        headers: {
          'content-type': 'application.json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => this.getEvents)
      .then(event => dispatch({
        type: NEW_EVENT,
        payload: event
      })
    ); 
};

export const editEvent = (eventData) => dispatch => {
  console.log("fetching events (action: editEvent)");
      fetch(`http://localhost:4000/events/add?`, {
        method: 'POST',
        headers: {
          'content-type': 'application.json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => this.getEvents)
      .then(event => dispatch({
        type: EDIT_EVENT,
        payload: event
      })
    ); 
};

export const deleteEvent = (eventData) => dispatch => {
  console.log("fetching events (action: deleteEvent)");
      fetch(`http://localhost:4000/events/add?`, {
        method: 'POST',
        headers: {
          'content-type': 'application.json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => this.getEvents)
      .then(event => dispatch({
        type: DELETE_EVENT,
        payload: event
      })
    ); 
};



 // addEvent = _ => {
  //   console.log("adding an event");
  //   const { event } = this.state;
  //   fetch(`http://localhost:4000/events/add?event_title=${event.event_title}&start_date=${event.start_date}&start_time1=${event.start_time1}&event_description_long=${event.event_description_long}`)
  //     .then(res => this.getEvents)
  //     .catch(err => console.log(err))
  // }


