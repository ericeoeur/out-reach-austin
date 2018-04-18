//Call for dependenices and components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEvent } from '../actions/eventActions';
import { editEvent } from '../actions/eventActions';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
//import app from 'express';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      state:   {
        response: ''
      },
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
      //set these variables to state, so they can push to database. 
      event_title: this.props.events.event_title,
      start_date: this.props.events.start_date,
      start_time1: this.props.events.start_time1,
      end_time1: this.props.events.end_time1,
      event_description_long: this.props.events.event_description_long,
      event_location: this.props.events.event_location,
      event_type: this.props.events.event_type,
      event_cost: this.props.events.event_cost,
      event_organizer: this.props.events.event_organizer,
      event_link: this.props.events.event_link,
      image_link: this.props.events.image_link
    }
    //Binding your actions
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickChronicle = this.onClickChronicle.bind(this);
  }

  //Allows you to edit the text input when updating form. 
  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

//getting image link
  getAvatarURL = (avatarURL) => {
    this.setState({ imageURL: avatarURL });
  };


setAvatarUrl = (image) => {
    this.setState({
      avatarURL: image,
      image_link: image
    })
  }
  


  //When you submit your event, it takes a copy of the items from state and places it in a varible to submit to the action
  onSubmit(e) {
    e.preventDefault();
    const editedEvent = { //when you get back, check if these variables are being filled properly. they are returning empty currently
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
      image_link: this.state.image_link
    }
    //check if the editedEvent variable is holding data from state
    console.log(editedEvent); 
    //call redux action here -- send ID of event and the edited event array
    this.props.editEvent(this.props.match.params.id, editedEvent); 

    this.setState({
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
      image_link: this.state.image_link
    });
  }

  //On click event handler.
  onClick(e) {
    e.preventDefault();
  }

  //This is onClickEventw hen you click "Submit to Austin Chroncile" that the server should be called...
  onClickChronicle(e) {
    e.preventDefault();
    //componentWillMount(); 
    console.log("click chroncile action called");
    console.log(this.props.match.params.id);

      axios.post("http://localhost:5000/",{
        incomingKey: this.props.match.params.id
      }).then((response)=> {
         console.log("Data submitted successfully");
      }).catch((error)=> {
         console.log("got errr while posting data", error);
      });
  }

  //Rendering the information to page. 
  render() {
    console.log(this.props);

    return (<div>
      <br /><br /><br /><br />

      <div>
        <h1>Title:{this.props.events.event_title}</h1>
        <p>Date: {this.props.events.start_date}</p>
        <p>Time: {this.props.events.start_time1}</p>
        <p>End Time:{this.props.events.end_time1}</p>
        <p>Description: {this.props.events.event_description_long}</p>
        <p>Event Location: {this.props.events.event_location}</p>
        <p>Event Type: {this.props.events.event_type}</p>
        <p>Event Cost: {this.props.events.event_cost}</p>
        <p>Event Organizer: {this.props.events.event_organizer}</p>
        <p>Event Link: {this.props.events.event_link}</p>
        {/* <p>Event Image: {this.props.events.image_link}</p > */}
        <img src = {this.state.image_link} height = '20%'width = '20%' />
      </div>

      <p className="App-intro">{this.state.response}</p>

      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Event Editor:</label><br />
            <p>Title</p><input type="text" name="event_title" onChange={this.onInputChange} defaultValue={this.props.events.event_title} /> <br />
            <p>start_date</p><input type="text" name="start_date" onChange={this.onInputChange} defaultValue={this.props.events.start_time1} /><br />
            <p>start_time1</p><input type="text" name="start_time1" onChange={this.onInputChange} defaultValue={this.props.events.start_date} /><br />
            <p>end_time1</p><input type="text" name="end_time1" onChange={this.onInputChange} defaultValue={this.props.events.end_time1} /><br />
            <p>event_description_long</p><input type="text" name="event_description_long" onChange={this.onInputChange} defaultValue={this.props.events.event_description_long} /><br />
            <p>event_location</p><input type="text" name="event_location" onChange={this.onInputChange} defaultValue={this.props.events.event_location} /><br />
            <p>event_type</p><input type="text" name="event_type" onChange={this.onInputChange} defaultValue={this.props.events.event_type} /><br />
            <p>event_cost</p><input type="text" name="event_cost" onChange={this.onInputChange} defaultValue={this.props.events.event_cost} /><br />
            <p>event_organizer</p><input type="text" name="event_organizer" onChange={this.onInputChange} defaultValue={this.props.events.event_organizer} /><br />
            <p>event_link</p><input type="text" name="event_link" onChange={this.onInputChange} defaultValue={this.props.events.event_link} />
            <p>image_link</p> <h>Edit Image</h>
            <ImageUpload setAvatarUrl = {this.setAvatarUrl} 
              /><input type="text" name="image_link" onChange={this.onInputChange} defaultValue={this.props.events.image_link} />

            <br />
            <button
              type="submit"
              onClick={this.onSubmit}>Submit Edits
            </button>
            
          </div>
          <br />

          <button
            className="btn btn-danger btn-xs"
            size="small"
            onClick={() => this.props.deleteEvent(this.props.match.params.id)}>
            Delete Event (uhhh... this works but it throws you an error bc the item doesnt exist anymore. halp me reroute this!!)
          </button>

          <button type="submit">Submit to Do512</button>
          <button type="submit" onClick={this.onClickChronicle} >Submit to Austin Chronicle</button>
          <button type="submit">Submit Austin 360</button>
          <button type="submit">Email Event Information</button>

        </form>
      </div>
      <div>
        <Link to="/">Back to Main Page</Link>
      </div>

    </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.events.items[ownProps.match.params.id]
  }
}


export default connect(mapStateToProps, { deleteEvent, editEvent })(EventDetail);