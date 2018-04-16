import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { database } from '../firebase'; 
import { deleteEvent } from '../actions/eventActions'


const styles = {
  card: {
    minWidth: 275,
    maxWidth: '70%',
    margin: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class EventCard extends React.Component {
   static propTypes = {
     key: PropTypes.string, 
       title: PropTypes.string,
       date: PropTypes.string,
       time: PropTypes.string,
       content:PropTypes.string,
       classes : PropTypes.shape({ 
           card: PropTypes.string,
           bullet: PropTypes.string,
           title: PropTypes.string,
           pos: PropTypes.string
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
   }


    render(){
        const classes = this.props.classes;
        const bull = <span className={classes.bullet}>•</span>;
        return (
            <div>
            <div>{this.props.children}</div>
            <Grid>
              <Card className={classes.card}>
                <CardContent>
                <Grid item>
                  <Typography className={classes.title}>
                    <h1>{this.props.title}</h1>
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
              
                </Grid><Grid item>
          
                  <Button size="small" onClick={this.addEvent} >Edit Event</Button>
                

               
                  </Grid>
                </CardActions>
                </CardContent>

              </Card>
              </Grid>
            </div>
          )  
    };
}
  

export default withStyles(styles, {name:'EventCard'})(EventCard);


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