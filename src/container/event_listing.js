//This is a component that pulls from an the SQL API and adds information about an event. 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import EventCard from './EventCard';

//Import Action fetchEvents from actions/eventActions.js 
import { fetchEvents } from '../actions/eventActions';

class Events extends Component {
  componentWillMount() {
    console.log("this is mounting");
    this.props.fetchEvents();
  }
  

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
  //}

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

  render() {
    return (
    <div>
      
      {this.props.events && this.props.events.map(event => (
        <div key={event.id} 
        style={{paddingBottom: '8px', paddingLeft: '8px'}}>
          <EventCard
            title={event.event_title}
            date={event.start_date}
            time={event.start_time1}
            content={event.event_description_long}
          />
        </div>
      ))}
    </div>
    )
  }
}

//mapping items to the state to the post poerpty. 

Events.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
  events: state.events.items
});

//SUPER IMPORTANT!!!
export default connect(mapStateToProps, { fetchEvents })(Events);

