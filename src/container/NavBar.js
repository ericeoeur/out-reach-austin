import React from 'react';
import AppBar from 'material-ui/AppBar';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
//import LeftNav from 'material-ui/lib/left-nav';
import { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import { MuiThemeProvider, withStyles, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import List, { ListItem } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';


const paperStyle = {
    flex: {
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

    handleToggle() {
        this.setState({ open: !this.state.open });
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
            <div style={{ paddingBottom: 70 }}>
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
                                {
                                    this.props.user === null ? (
                                        <ListItem>
                                            <Link to="/"> Login </Link>
                                        </ListItem>
                                    ) : (
                                            <ListItem>
                                                <Link to="/event" onClick={() => this.props.logout()} >Logout</Link>
                                            </ListItem>)
                                }
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

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

// export connect(mapStateToProps, {getUser, logout})(NavBar);
// export default withStyles(paperStyle, {name: 'NavBar'})(NavBar);

//Alice this is important as it is exporting withStyles and the connect
//feature for login. use recompose/compose as imported above to assist
//with the combination
export default compose(
    withStyles(paperStyle, { name: 'NavBar' }),
    connect(mapStateToProps, { getUser, logout })
)(NavBar);