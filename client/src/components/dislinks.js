import React from 'react';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';


const DisplayLinks = props => {
	if (props.loggedIn) {
		return (

			 <div>
               <Button component={Link} to= '/dashboard' color="inherit">Dashboard</Button>
			   <Button component={Link} to= '/masterclass' color="inherit">Master Class</Button>
			   <Button component={Link} to= '/studio' color="inherit">Studio</Button>
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

export default DisplayLinks;