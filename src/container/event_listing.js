/*
event_listing.js shows all the events from the API. 
The container components pass data down to other React components.
*/


//This is a component that pulls from an the SQL API and adds information about an event. 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import EventCard from './EventCard';
import { database } from '../firebase';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getUser } from '../actions/userAction';

//Import Action fetchEvents from actions/eventActions.js 
import { fetchEvents } from '../actions/eventActions';
import { deleteEvent } from '../actions/eventActions';
import * as EventActions from '../actions/types';
import EditEventForm from './EditEventForm';
import _ from 'lodash';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      event: {
        key: '',
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
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    console.log("this is fetchEvents mounting");
    this.props.fetchEvents(); //this doing the call for action from firebase
    this.props.getUser();
  }

  //render posts maps over the data from firebase and displays it in divs
  renderPosts() {
    return _.map(this.props.events, (event, key) => {
      return (
        <div key={key}
          style={{ paddingBottom: '8px', paddingLeft: '8px' }}>
          <EventCard
            key={key}
            id={key}
            title={event.event_title}
            date={event.start_date}
            time={event.start_time1}
            end_time1={event.end_time1}
            content={event.event_description_long}
            event_location={event.event_location}
            event_type={event.event_type}
            event_cost={event.event_cost}
            event_organizer={event.event_organizer}
            event_link={event.event_link}
            image_link={event.image_link}
          />
        </div>
      )
    });
  }

  // // <button className="btn btn-danger btn-xs" size="small" onClick={() => database.child(key).remove()}>
  // Delete
  // </button>

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
const mapStateToProps = (state, ownProps) => ({
  events: state.events.items,
  user: state.user
});

Events.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
}

//SUPER IMPORTANT!!!
export default connect(mapStateToProps, { fetchEvents, deleteEvent, getUser })(Events);