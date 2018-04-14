import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
//import LeftNav from 'material-ui/lib/left-nav';
import { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import { MuiThemeProvider, withStyles, createMuiTheme } from 'material-ui/styles';
import { Switch } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import List, { ListItem } from 'material-ui/List';
import Icon from 'material-ui/Icon';


const paperStyle = {
    flex:{
        flex: 1
    }
};

class NavBar extends React.Component {
    static propTypes = {
        classes: PropTypes.shape({
            flex: PropTypes.string
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle () {
        this.setState({open: !this.state.open});
    }
    toggleDrawer = open => () => {
        this.setState({
          open: open
        });
      };
   
    render() {
        
        const theme = createMuiTheme({
            palette: {
                type: 'light',
            }
          });
        let content = null;
        const classes = this.props.classes;


        return (
            <MuiThemeProvider theme={theme} >
                <div>
                    <AppBar>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleToggle} >
                                <FontAwesome name="bars" />
                            </IconButton>
                            <Typography type="title" color="inherit">
                                Out-Reach Austin
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <Drawer
                            width={200}
                            open={this.state.open}
                            onClose={this.toggleDrawer(false)}
                            >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer(false)}
                            onKeyDown={this.toggleDrawer(false)}
                        >
                            <List>
                                <ListItem><Link to="/" >Hello</Link></ListItem>
                                <ListItem><Link to="/event" >Single Event</Link></ListItem>
                                <ListItem><Link to="/eventList">Event List</Link></ListItem>
                                <ListItem><Link to="/todoList">Todo List</Link></ListItem>
                                <ListItem><Link to="/posts">Posts</Link></ListItem>
                                <ListItem><Link to="/Alice">Alice</Link></ListItem>
                                <ListItem><Link to="/addevent">Add Event</Link></ListItem>
                            </List>
                        </div>
                        </Drawer>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */




/*<ul>
<li><Link to="/">Main</Link></li>
<li><Link to="/event">Single Event</Link></li>
<li><Link to="/eventlist">Event List</Link></li>
      <li><Link to="/todolist">TodoList</Link></li>
<li><Link to="/posts">Posts</Link></li>
<li><Link to="/Alice">Alice</Link></li>
</ul>
<hr />*/


export default withStyles(paperStyle, {name: 'NavBar'})(NavBar);