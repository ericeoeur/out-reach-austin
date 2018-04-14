/*
event_listing.js shows all the events from the API. 
The container components pass data down to other React components.
*/


//This is a component that pulls from an the SQL API and adds information about an event. 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { database } from '../firebase'
import { bindActionCreators } from 'redux';



//Import Action fetchEvents from actions/eventActions.js 
import { fetchEvents } from '../actions/eventActions';
import * as EventActions from '../actions/types';
import EditEventForm from './EditEventForm';
import _ from 'lodash';


class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      event: {
        event_title: 'example event',
        start_date: '030318',
        start_time1: '500',
        end_time1: '600',
        event_description_long: 'This is a sample description',
        event_location: 'test',
        event_type: 'test',
        event_cost: 'test',
        event_organizer: 'test',
        event_link: 'test',
        image_link: 'test'
      }
    };
    //Bind 
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onHandleSubmit = this.onHandleSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    console.log("this is fetchEvents mounting");
    this.props.fetchEvents(); //this doing the call for action from firebase
  }

  //render posts maps over the data from firebase and displays it in divs
  renderPosts() {
    return _.map(this.props.events, (event, key) => {
      return (
        <div key={key}>
          <h2>{event.event_title}</h2>
          <p>{event.start_date}</p>
          <p>{event.start_time1}</p>
          <p>{event.end_time1}</p>
          <p>{event.event_description_long}</p>
          <p>{event.event_location}</p>
          <p>{event.event_type}</p>
          <p>{event.event_cost}</p>
          <p>{event.event_organizer}</p>
          <p>{event.event_link}</p>
          <p>{event.image_link}</p>
        </div>
      )
    });
  }

  render() {
    return (<div>
      {this.renderPosts()}
    </div>
    )
  }

}


function mapDispachToProps(dispatch) {
  return {
    actions: bindActionCreators(EventActions, dispatch)
  };
}

//mapping items to the state to the post poerpty. 
const mapStateToProps = state => ({
  events: state.events.items
});

Events.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
}

//SUPER IMPORTANT!!!
export default connect(mapStateToProps, { fetchEvents })(Events);














// <div className="event-edit">
// <input 
//   value={event.event_title} 
//   onChange={e => this.setState({ event: { ...event, event_title: e.target.value } })} 
// />

// <input 
//   value={event.start_date} 
//   onChange={e => this.setState({ event: { ...event, start_date: e.target.value } })} 
//   />

// <input 
//   value={event.start_time1} 
//   onChange={e => this.setState({ event: { ...event, start_time1: e.target.value } })} 
//   />

// <input 
//   value={event.event_description_long} 
//   onChange={e => this.setState({ event: { ...event, event_description_long: e.target.value } })} 
//   />

// <button onClick={this.addEvent}>Edit Events</button>
// </div>


// class Events extends Component {
//   componentWillMount() {
//     console.log("this is fetchEvents mounting");
//     this.props.fetchEvents();
//   }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     events: [],
  //     event: {
  //       event_title: 'example event',
  //       start_date: '030318',
  //       start_time1: '500',
  //       event_description_long: 'This is a sample description'
  //     }
  //   }
  // }

  //http://localhost:4000/events/add?event_title=test3&start_date=100318&start_time1=3&event_description_long=testdescription3

  // componentDidMount() {
  //   this.getEvents();
  // }

  // getEvents = _ => {
  //   fetch('http://localhost:4000/events')
  //     .then(res => res.json())
  //     .then(res => this.setState({ events: res.data }))
  //     .catch(err => console.log(err))

  // }

  // addEvent = _ => {
  //   console.log("adding an event");
  //   const { event } = this.state;
  //   fetch(`http://localhost:4000/events/add?event_title=${event.event_title}&start_date=${event.start_date}&start_time1=${event.start_time1}&event_description_long=${event.event_description_long}`)
  //     .then(res => this.getEvents)
  //     .catch(err => console.log(err))
  // }

  //console.log (event_title, start_date, start_time1, event_description_long);

  //Make sure to give a div key to each event, otherwise react will yell at u bb 



  //NEED TO EDIT THIS ~~~~~~~~~~~~~~~~~~~~~~~ 4/10/18 

  // renderEvent = ({ id, event_title }) => <div key={id}>{event_title}</div>

  // render() {
  //   const { events, event } = this.props;
  //   return (
  //     <div className="app">
  //       {events.map(this.renderEvent)}

  //       <div>
  //         <input value={event.event_title} onChange={e => this.setState({ event: { ...event, event_title: e.target.value } })} />

  //         <input value={event.start_date} onChange={e => this.setState({ event: { ...event, start_date: e.target.value } })} />

  //         <input value={event.start_time1} onChange={e => this.setState({ event: { ...event, start_time1: e.target.value } })} />

  //         <input value={event.event_description_long} onChange={e => this.setState({ event: { ...event, event_description_long: e.target.value } })} />

  //         <button onClick={this.addEvent}>Add Events</button>

  //       </div>
  //     </div>
  //   );
  // }

//   render() {
//     return (<div>
//       {this.props.events && this.props.events.map(event => (
//         <div key={event.id}>

//           <h1>{event.id}. {event.event_title}</h1>
//           <p>Start Date: {event.start_date}</p>
//           <p>Time: {event.start_time1}-{event.end_time1} </p>
//           <p>Event Description: {event.event_description_long}</p>
//           <p>Location: {event.event_location}</p>
//           <p>Event Type: {event.event_type}</p>
//           <p>Cost: {event.event_cost} </p>
//           <p>Event Organizer {event.event_organizer}</p>
//           <p>Event Link: {event.event_link}</p>
//           <p>Event Image Link: {event.image_link}</p>
//           <p><i>Event Listing Created By: {event.created_by} on {event.created_date}</i></p>
//           <br />

//           <div className="event-edit">
//             <EditEventForm
//               key={event.id}
//               event_title={event.event_title}
//               start_date={event.start_date}  
//               start_time1={event.start_time1} 
//               end_time1={event.end_time1}
//               event_description_long={event.event_description_long}
//               event_location={event.event_location}
//               event_type={event.event_type}
//               event_cost={event.event_cost}
//               event_organizer={event.event_organizer}
//               event_link={event.event_link}
//               image_link={event.image_link} 
//               />
//           </div>
//         </div>
//       ))}
//     </div>
//     )
//   }
// }

// //mapping items to the state to the post poerpty. 

// Events.propTypes = {
//   fetchEvents: PropTypes.func.isRequired,
//   events: PropTypes.array.isRequired
// }


// const mapStateToProps = state => ({
//   events: state.events.items
// });

// //SUPER IMPORTANT!!!
// export default connect(mapStateToProps, { fetchEvents })(Events);
