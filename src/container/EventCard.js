import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardTitle, CardActions, CardContent, CardText } from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { database } from '../firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Import Action fetchEvents from actions/eventActions.js 
import { fetchEvents } from '../actions/eventActions';
import { deleteEvent } from '../actions/eventActions';
import * as EventActions from '../actions/types';
import EditEventForm from './EditEventForm';
import _ from 'lodash';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: '70%',
    margin: 'auto'
  },
  CardHeader: {
    fontSize: '5em'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    
  },
  pos: {
    marginBottom: 12,
  },
};

class EventCard extends React.Component {
  static propTypes = {
    onDelete: PropTypes.func,
    key: PropTypes.string,
    id: PropTypes.syring,
    title: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
    end_time1: PropTypes.string,
    event_location: PropTypes.string,
    event_type: PropTypes.string,
    event_cost: PropTypes.string,
    event_organizer: PropTypes.string,
    event_link: PropTypes.string,
    image_link: PropTypes.string,
    classes: PropTypes.shape({
      card: PropTypes.string,
      bullet: PropTypes.string,
      title: PropTypes.string,
      pos: PropTypes.string,
      CardHeader: PropTypes.string
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      events: [],

      event_title: 'example event',
      start_date: '030318',
      start_time1: '500',
      event_description_long: 'This is a sample description'
    }
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }
  handleDeleteEvent() {
    console.log("Deleting event");
    this.props.onDelete(this.props.id);
  }

  render() {
    const classes = this.props.classes;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>

        <div>{this.props.children}</div>

        <Grid>
          <Card 
          className={classes.card}
          
          >
          
          <CardHeader
              title={this.props.event_location}
              subtitle={this.props.event_location}
              style={{
                backgroundColor: '#E3F2FD',
                height: '50px'

              }}
              
            />
           
{/* /Grid system for 2 columns start/  */}
           <Grid container spacing={24}>
           <Grid item xs={12} sm={6}>
           <div style={{ padding: 20 }}>
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
              <img src={this.props.image_link} alt="test" object-fit="cover" width="100%" />
              
              </CardMedia>
              </div>
              </Grid> 
              <Grid item xs={12} sm={6}> 
            <CardContent>

              <Grid item>
                <Typography className={classes.title}>
                <div style={{  lineHeight: 1.2 }}>
                  <h1>{this.props.title}</h1>
                </div>  
                </Typography>
              </Grid>


              <Grid item>
                <Typography className={classes.pos}>
                  {`${this.props.date}, ${this.props.time}`}
                </Typography>
              </Grid>

              <Grid item>
                <Typography component="p">
                  {this.props.content}
                </Typography>
              </Grid>

              <CardActions>
                <Grid item>
                  <Button size="small">
                    <Link to={`/events/${this.props.id}`}>Edit Event</Link></Button>
                  <Button size="small" onClick={deleteEvent(this.props.id)}>
                    Delete
                  </Button>
                </Grid>
              </CardActions>

            </CardContent>
            </Grid>
          </Grid>
{/* /Grid system for 2 columns finish/  */}


          </Card>
        </Grid>
      </div>
    )
  };
}



export default (withStyles(styles, { name: 'EventCard' })(EventCard));


//alice i put your grid items here for now to cut down on size
// <Grid item>
// <Typography noWrap>
// <input value={this.props.title} onChange={e => this.setState({ event_title: e.target.value  })} />
// </Typography>
// </Grid>
// <Grid item>
// <Typography noWrap>
// <input value={this.props.date} onChange={e => this.setState({ start_date: e.target.value  })} />
// </Typography>
// </Grid>
// <Grid item>
// <Typography noWrap>
// <input value={this.props.time} onChange={e => this.setState({ start_time1: e.target.value  })} />
// </Typography>
// </Grid>
// <Grid item>
// <Typography noWrap>
// <input value={this.props.content} onChange={e => this.setState({event_description_long: e.target.value  })} />
// </Typography>
// </Grid>