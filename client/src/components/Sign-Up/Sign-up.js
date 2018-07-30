import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


import './Sign-up.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


class SignUp extends Component {
  constructor(props){
     super(props)
		this.state = {
      username: '',
      email:'',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
  
  handleSubmit(event) {
		event.preventDefault()

    //TODO - validate!
		axios
			.post('/auth/signup', {
        username: this.state.username,
        email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}

  render() {

   
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    return (
        <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          
          <Input 
          type="text" 
          name="username"
           placeholder="Username"
           value={this.state.username}
           onChange={this.handleChange} />

          <Input 
          type="text" 
          name="email"
           placeholder="E-mail"
           value={this.state.email}
           onChange={this.handleChange}
            />
          <Input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password}
           onChange={this.handleChange}/>

          <Input
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
           onChange={this.handleChange} />
          
          {/* <Input type="submit" name="signup_submit" value="Sign me up" /> */ }
        <Button 
        variant="contained" 
        size="large" 
        color="secondary"
         style={{styles}}
         onClick={this.handleSubmit}>
           Sign-Up
         </Button>       
       
        </div>
        
        <div class="right">
          <span class="loginwith">Sign in with<br />social network</span>
          
          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);