/*
This is the Component that produces a form that allows you to add an event to the API. 
//This is a component that pulls from an the SQL API and adds information about an event. 
The container components pass data down to other React components.
*/

//Import React and Component 
import React, { Component } from 'react'
import { database } from '../firebase'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventActions from '../actions/types';
import _ from 'lodash';
import ImageUpload from './ImageUpload';


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
      },
      imageURL: null
    };
    //Bind 
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.setAvatarUrl = this.setAvatarUrl.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  //lifecycle method
  //any changes that happen in the database use .on()
  componentDidMount() {
    this.props.createEvent();
    database.on('value', snapshot => {
      this.setState({
        events: snapshot.val()
      });
    });

  }

  //render posts from firebase
  renderPosts() {
    return _.map(this.state.events, (event, key) => {
      return (
        <div key={key}>
          <h2>{event.event_title}</h2>
          <p>{event.start_date}</p>

        </div>
      )
    });
  }

  getAvatarURL = (avatarURL) => {
    this.setState({ imageURL: avatarURL });
  };



  //set e.target value to be able to type into the form
  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onImageUpload(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onHandleSubmit(e) {
    e.preventDefault();
    const newEvent = {
      event_title: this.state.event_title,
      start_date: this.state.start_date,
      start_time1: this.state.start_time1,
      end_time1: this.state.end_time1,
      event_description_long: this.state.event_description_long,
      event_location: this.state.event_location,
      event_type: this.state.event_type,
      event_cost: this.state.event_cost,
      event_organizer: this.state.event_organizer,
      event_link: this.state.event_link,
      image_link: this.state.avatarURL
    };

    //Need Method here below is the Firebase method, calling the createEvent Action
    this.props.createEvent(newEvent);

    //Below is the non-redux version.
    // database.push(newEvent);
    this.setState({
      event_title: 'example',
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

    });

  }

  setAvatarUrl(image) {
    this.setState({
      avatarURL: image,
      image_link: image
    })
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
      <form onSubmit={this.onHandleSubmit}>
          <div className="AddEvent">

            <form onSubmit={this.onHandleSubmit}>
              <label>Event Title:</label><br />
              <input
                type="text"
                name="event_title"
                onChange={this.onInputChange}
                ref="event_title"
                value={this.state.event_title}
              />

              <p>Start Date</p>
              <input
                type="text"
                name="start_date"
                onChange={this.onInputChange}
                ref="start_date"
                value={this.state.start_date} />

              <p>Start Time</p>
              <input
                type="text"
                name="start_time1"
                onChange={this.onInputChange}
                ref="start_time1"
                value={this.state.start_time1} />

              <p>End Time</p>
              <input
                type="text"
                name="end_time1"
                onChange={this.onInputChange}
                ref="end_time1"
                value={this.state.end_time1}
              />

              <p>Event Description</p>
              <input
                type="text"
                name="event_description_long"
                onChange={this.onInputChange}
                ref="event_description_long"
                value={this.state.event_description_long}
              />

              <p>Event Location</p>
              <input
                type="text"
                name="event_location"
                onChange={this.onInputChange}
                ref="event_location"
                value={this.state.event_location}
              />

              <p>Event Type</p>
              <input
                type="text"
                name="event_type"
                onChange={this.onInputChange}
                ref="event_type"
                value={this.state.event_type}
              />

              <p>Event cost</p>
              <input
                type="text"
                name="event_cost"
                onChange={this.onInputChange}
                ref="event_cost"
                value={this.state.event_cost}
              />

              <p>Event Organizer</p>
              <input
                type="text"
                name="event_organizer"
                onChange={this.onInputChange}
                ref="event_organizer"
                value={this.state.event_organizer}
              />

              <p>Event Link</p>
              <input
                type="text"
                name="event_link"
                onChange={this.onInputChange}
                ref="event_link"
                value={this.state.event_link}
              />

              <p>Image</p>
              <ImageUpload
                setAvatarUrl={this.setAvatarUrl}
              />

              <input
                type="text"
                name="image_link"
                onChange={this.onInputChange}
                ref="image_link"
                value={this.state.avatarURL}
              />
            </form>

          </div>
          <br />

          <br />
          <button type="submit">Submit Event</button>
        </form>
        <br />
        {this.renderPosts()}
      </div>
    )
  }
}

//mapping items to the state to the post property. 
//Whenever a component wants to change the data stored within the store, 
//it prepares an action object and dispatches the action object to the store.
function mapDispachToProps(dispatch) {
  return {
    actions: bindActionCreators(EventActions, dispatch)
  };
}

const mapStateToProps = (state, ownProps) => ({
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