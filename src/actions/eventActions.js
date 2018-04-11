// Import your Event Filters here
import { FETCH_EVENTS, NEW_EVENT } from '../constants/EventFilters';


//Export a Function that pulls the data from the SQL API
//When you get the data, dispatch it (Middleware: THUNK) to
// container/event_listing.js 

export const fetchEvents = () => dispatch => {
  console.log("fetching events");
      fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(events => 
        dispatch({
        type: FETCH_EVENTS,
        payload: events.data
      })
    ); 
};