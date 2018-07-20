import React, { Component } from 'react';
import Landing from './components/Landing/Landing';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Landing}/>
        {/* <Route exact path="/admin" component={AdminArea}/> */}
      </div>
    </Router>
    );
  }
}

export default App;
