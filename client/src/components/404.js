import React, { Component } from 'react';
import { Button } from '@material-ui/core';






const NotFound = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
             
           
       
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.username} </strong>
			</p>
       
           
       
		)
	}
	return (
		<div className="Header">
            {Greeting}
          <h1> 404 ! </h1>
            <p>Seems like we've hit a wrong note...<br/> Travel a different, more traveled route... hit the back button...or...<br/><Button primary >
             <b>Go Home </b>   </Button> </p>
           
      
  
		</div>
	)
}

export default NotFound;

   
   
  

 
       
    