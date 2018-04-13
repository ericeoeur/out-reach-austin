//This is a component that pulls from an the SQL API and adds information about an event. 
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todos';

import ImageUpload from './ImageUpload';




class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      event: {
        event_title: 'example event',
        start_date: '030318',
        start_time1: '500',
        event_description_long: 'This is a sample description'
      }
    }
  }

  //http://localhost:4000/events/add?event_title=test3&start_date=100318&start_time1=3&event_description_long=testdescription3

  componentDidMount() {
    this.getEvents();
  }

  getEvents = _ => {
    fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err))

  }


  addEvent = _ => {
    console.log("adding an event");
    const { event } = this.state;
    fetch(`http://localhost:4000/events/add?event_title=${event.event_title}&start_date=${event.start_date}&start_time1=${event.start_time1}&event_description_long=${event.event_description_long}`)
      .then(res => this.getEvents)
      .catch(err => console.log(err))
  }

  //console.log (event_title, start_date, start_time1, event_description_long);

  //Make sure to give a div key to each event, otherwise react will yell at u bb 
  renderEvent = ({ id, event_title }) => <div key={id}>{event_title}</div>

  render() {
    const { events, event } = this.state;
    return (
      <div className="app">
        {events.map(this.renderEvent)}

        <ImageUpload />

        <div>
          <input value={event.event_title} onChange={e => this.setState({ event: { ...event, event_title: e.target.value } })} />

          <input value={event.start_date} onChange={e => this.setState({ event: { ...event, start_date: e.target.value } })} />

          <input value={event.start_time1} onChange={e => this.setState({ event: { ...event, start_time1: e.target.value } })} />

          <input value={event.event_description_long} onChange={e => this.setState({ event: { ...event, event_description_long: e.target.value } })} />

          <button onClick={this.addEvent}>Add Events</button>

        </div>
      </div>
    );
  }
}


//NOTE app is not updating automatically like the other ones. I think it has to deal with the state not updating properly when being rendered. 
//Upon return: review how todoList updates state and mimic that with this event_listing.js 

export default Events;

