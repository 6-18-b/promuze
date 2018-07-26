import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import promuzeTheme from '../src/styles/promuzeTheme.js';
import OktaConfig from '../src/util/okta-config.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Security, ImplicitCallback } from '@okta/okta-react';


import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

const config = OktaConfig;


class App extends Component {
 
  render() {
    return (
      <MuiThemeProvider theme={promuzeTheme}>
        <Router>
          <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}>
          <Route exact path="/" exact={true} component={Landing}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
          <Route exact path="/" component={Dashboard}/>
           {/* <Route exact path="/admin" component={AdminArea}/> */}
           </Security>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default App;
