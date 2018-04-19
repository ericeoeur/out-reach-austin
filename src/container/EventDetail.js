//Call for dependenices and components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEvent } from '../actions/eventActions';
import { editEvent } from '../actions/eventActions';
import { Redirect } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import PropTypes from "prop-types";
import 'typeface-roboto';
import { Typography } from 'material-ui';

const styles = {
  paper: {
    textAlign: 'center'
 },
 button: {
  backgroundColor: "#2196f3",
  color: "white"
},
button1: {
  backgroundColor: "#039BE5",
  color: "white"
},
button2: {
  backgroundColor: "#0288D1",
  color: "white"
},
button3: {
  backgroundColor: "#0277BD",
  color: "white"
},
button4: {
  backgroundColor: "#01579B",
  color: "white"
}
}
class EventDetail extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      paper: PropTypes.string
    })
  }
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

  //Rendering the information to page. 
  render() {
    const classes = this.props.classes;
    console.log(this.props);

    return (<div>
      <br /><br /><br /><br />

<Typography>
      <Grid container spacing={24}>
      
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
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

          </Paper>
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <form onSubmit={this.onSubmit}>
          <div>
            <label><h1>Event Editor:</h1></label><br />
            <TextField
                id="search"
                label="Title"
                type="search"
                name="event_title" 
                onChange={this.onInputChange} 
                defaultValue={this.props.events.event_title}
              /><br/>

             <TextField
                id="search"
                label="Start Date"
                type="search"
                name="start_date" 
                onChange={this.onInputChange} 
                defaultValue={this.props.events.start_time1}
              /><br/>

              <TextField
                id="search"
                label="Start Time"
                type="search"
                name="start_time1" 
                onChange={this.onInputChange} 
                defaultValue={this.props.events.start_date}
              /><br/>

              <TextField
                id="search"
                label="End Time"
                type="search"
                name="end_time1"
                onChange={this.onInputChange}
                defaultValue={this.props.events.end_time1}
              /><br/>

              <TextField
                id="search"
                label="Event Description"
                type="search"
                name="event_description_long" 
                onChange={this.onInputChange} 
                defaultValue={this.props.events.event_description_long}
              /><br/>

              <TextField
                id="search"
                label="Event Location"
                type="search"
                name="event_location"
                onChange={this.onInputChange}
                defaultValue={this.props.events.event_location}
              /><br/>

              <TextField
                id="search"
                label="Event Type"
                type="search"
                name="event_type"
                onChange={this.onInputChange}
                defaultValue={this.props.events.event_type}
              /><br/>

              <TextField
                id="search"
                label="Event Cost"
                type="search"
                name="event_cost"
                onChange={this.onInputChange}
                defaultValue={this.props.events.event_cost}
              /><br/>

              <TextField
                id="search"
                label="Event Organizer"
                type="search"
                name="event_organizer" 
                onChange={this.onInputChange}
                defaultValue={this.props.events.event_organizer}
              /><br/>

              <TextField
                id="search"
                label="Event Organizer"
                type="search"
                name="event_link"
                onChange={this.onInputChange}
                defaultValue={this.props.events.event_link}
              /><br/>
            
            <p>Edit Image</p>
              <Button variant="raised" color="blue">
                <ImageUpload setAvatarUrl={this.setAvatarUrl} />
              </Button>

              <TextField
                id="search"
                label="Image Link"
                type="search"
                margin="normal"
                type="text"
                name="image_link"
                onChange={this.onInputChange}
                defaultValue={this.props.events.image_link}
              />

            <br />
            <Button
              type="submit"
              className={classes.button}
              onClick={this.onSubmit}>Submit Edits
            </Button>
            
          </div>
          <br />

          <Button
            type="submit"
            
            onClick={() => this.props.deleteEvent(this.props.match.params.id)}>
            Delete Event (uhhh... this works but it throws you an error bc the item doesnt exist anymore. halp me reroute this!!)
          </Button>

          <Button className={classes.button2} type="submit">Submit to Do512</Button>
          <Button className={classes.button3} type="submit">Submit to Austin Chronicle</Button>
          <Button className={classes.button4} type="submit">Submit Austin 360</Button>
          <Button className={classes.button} type="submit">Email Event Information</Button>

        </form>
          
          </Paper>
        </Grid>
        
      </Grid>

     
      <div>
        
      </div>
      <div>
        <Link to="/">Back to Main Page</Link>
      </div>
      </Typography>
    </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    events: state.events.items[ownProps.match.params.id]
  }
}


export default connect(mapStateToProps, { deleteEvent, editEvent })(withStyles(styles)(EventDetail));