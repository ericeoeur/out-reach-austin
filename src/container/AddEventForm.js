/*
This is the Component that produces a form that allows you to add an event to the API. 
//This is a component that pulls from an the SQL API and adds information about an event. 
*/

//Import React and Component 
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventActions from '../actions/types';


//Import Action fetchEvents from actions/eventActions.js 
import { createEvent } from '../actions/eventActions';

class AddEventForm extends Component {
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
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //set e.target value to be able to type into the form 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  //When console.logging this it works!!!
  onSubmit(e) {
    e.preventDefault();
    const newEvent = {
      event_title: this.state.event_title,
      start_date: this.state.start_date,
      start_time1: this.state.start_time1,
      end_time1: this.state.end_time1,
      event_description_long: this.state.event_description_long,
      event_location: this.state.location,
      event_type: this.state.event_type,
      event_cost: this.state.event_cost,
      event_organizer: this.state.event_organizer,
      event_link: this.state.event_link,
      image_link: this.state.image_link
    }
    //call action here
    this.props.createEvent(newEvent);
  }

  render() {
    console.log("this is the render for AddEventForm");
    return (
      <div>
      <h1>
          <Link to="/">Out-Reach-Austin: AddEvent</Link>
      </h1>
        <h2>Add your event here</h2>
        This is where the AddEventForm will go.
      <form onSubmit={this.onSubmit}>
          <div className = "AddEvent">

            <label>Event Title:</label><br />
            <input type="text" name="Event Title" onChange={this.onChange} value={this.props.event_title} />
            <p>Start Date</p>
            <input type="text" name="Event start_date" onChange={this.onChange} value={this.props.start_time1 }/>
            <p>Start Time</p>
            <input type="text" name="Event start_time1" onChange={this.onChange} value={this.props.start_date }/>
            <p>End Time</p>
            <input type="text" name="Event end_time1" onChange={this.onChange} value={this.props.end_time1 }/>
            <p>Event Description</p>
            <input type="text" name="Event event_description_long" onChange={this.onChange} value={this.props.event_description_long }/>
            <p>Event Location</p>
            <input type="text" name="Event event_location" onChange={this.onChange} value={this.props.event_location}/>
            <p>Event Type</p>
            <input type="text" name="Event event_type" onChange={this.onChange} value={this.props.event_type}/>
            <p>Event cost</p>
            <input type="text" name="Event event_cost" onChange={this.onChange} value={this.props.event_cost}/>
            <p>Event Organizer</p>
            <input type="text" name="Event event_organizer" onChange={this.onChange} value={this.props.event_organizer}/>
            <p>Event Link</p>
            <input type="text" name="Event event_link" onChange={this.onChange} value={this.props.event_link}/>
            <p>Image</p>
            <input type="text" name="Event image_link" onChange={this.onChange} value={this.props.image_link}/>
          </div>
          <br />

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

//mapping items to the state to the post poerpty. 
function mapDispachToProps(dispatch) {
  return {
    actions: bindActionCreators(EventActions, dispatch)
  };
}

const mapStateToProps = state => ({
  events: state.events.items
});

AddEventForm.propTypes = {
  EventActions: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
}

//SUPER IMPORTANT!!!
export default connect(mapStateToProps, { createEvent })(AddEventForm);

// return (<div>
//   {this.props.events && this.props.events.map(event => (
//     <div key={event.id}>
//       <br />
//       <h3>{event.id}. Edit Event Here</h3>
//       <div className="event-edit">
//       <input 
//         value={event.event_title} 
//         onChange={e => this.setState({ event: { ...event, event_title: e.target.value } })} 
//       />

//       <input 
//         value={event.start_date} 
//         onChange={e => this.setState({ event: { ...event, start_date: e.target.value } })} 
//         />

//       <input 
//         value={event.start_time1} 
//         onChange={e => this.setState({ event: { ...event, start_time1: e.target.value } })} 
//         />

//       <input 
//         value={event.event_description_long} 
//         onChange={e => this.setState({ event: { ...event, event_description_long: e.target.value } })} 
//         />

//       <button onClick={this.addEvent}>Edit Events</button>
//       </div>

//       </div>
//   ))}
// </div>
// )