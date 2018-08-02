import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, Switch as RouterSwitch } from 'react-router-dom'

import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/Login/LoginForm';
import Signup from './components/Sign-Up/Sign-up';
// import Header from './components/Header';
import Masterclass from './components/MasterClass/MC';
import Studio from './components/Studio/Studio.js';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'

import { AppBar, withStyles } from '@material-ui/core';
import SignUp from './components/Sign-Up/Sign-up';
import btmNav from './components/btm-nav';
import NotFound from './components/404';

const styles = {
	root: {
	  flexGrow: 1,
	},
	flex: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginLeft: -12,
	  marginRight: 20,
	},
  };

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (

			 <div>
               <Button component={Link} to= '/dashboard' color="inherit">Dashboard</Button>
			   <Button component={Link} to= '/masterclass' color="inherit">Master Class</Button>
			   <Button component={Link} to= '/studio' color="inherit">Studio</Button>
			   <Button onClick={props._logout} color="inherit" >Logout</Button>
			</div>
		)
	} else {
		return (
            <div>
              <Button component={Link} to= '/login' color="inherit">
		    	Login
		  	</Button>
		  </div>
     
		)
	}
}




class App extends Component {
  constructor() {
		super()
		this.state = {
			loggedIn: false,
			anchorEl: null,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	handleChange = (event, checked) => {
		this.setState({ loggedIn: checked });
	  };
	
	  handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	  };
	
	  handleClose = () => {
		this.setState({ anchorEl: null });
	  };

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}
 
  render() {

	const { classes } = this.props;
    const { loggedIn, anchorEl } = this.state;
	const open = Boolean(anchorEl);
	
    return (
    
      <div className="App">
	 {/* <AppBar _logout={this._logout} loggedIn={this.state.loggedIn}  user={this.state.user} /> */}
	 
	 <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={this.state.loggedIn} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={this.state.loggedIn ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
             Promuze
            </Typography>
            <DisplayLinks  _logout={this._logout} loggedIn={this.state.loggedIn} />
         
         
            {loggedIn && (
              <div>


                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >

          
            
     
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
      
        </AppBar>
      </div>



      {/* <Header user={this.state.user} /> */}
      {/* LINKS to our different 'pages' */}
       <RouterSwitch>
     {/*  ROUTES */}
      {/* <Route exact path="/" component={Home} /> */}
       <Route exact path="/" render={() => <Landing user={this.state.user} />} />
	   <Route exact path="/dashboard" render={() => <Dashboard user={this.state.user} />} />
	   <Route exact path="/masterclass" render={() => <Masterclass user={this.state.user} />} />
	   <Route exact path="/studio" render={() => <Studio user={this.state.user} />} />
       <Route
          exact
          path="/login"
         render={() =>
          <LoginForm
            _login={this._login}
            _googleSignin={this._googleSignin}
          />} />
	  {/* <Route exact path="/signup" component={SignUp} /> */}
	  <Route render={() => <NotFound user={this.state.user} />}/>
	   </RouterSwitch>
	   <btmNav/>     
    </div>
    );
  }
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
