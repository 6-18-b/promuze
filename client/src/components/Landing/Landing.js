import React, { Component } from 'react';
import AppBar from '../AppBar.js';


import './Landing.css';
import SignUp from '../Sign-Up/Sign-up.js';

class Landing extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <AppBar/>
        <SignUp/>
        <div style={{ }}>
        <video controls loop="true" width="100%" height="100%" >
     
        <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/mused-1111.appspot.com/o/musicnotes-vid.mp4?alt=media&token=6eeea655-21a9-401a-a938-5d0b3772cce4"></source>
        </video>
      
         <p className="App-intro">{this.state.response}</p>
        </div>
        
      </div>
    );
  }
}

export default Landing;
