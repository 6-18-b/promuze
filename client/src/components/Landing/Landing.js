import React, { Component } from 'react';
import AppBar from '../AppBar.js';


import './Landing.css';
import SignUp from '../Sign-Up/Sign-up.js';
import bgVid from './bgVid.js';
import './bgVid.css';
import btmNav from '../btm-nav.js';

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
        <bgVid/>
        <video autoPlay muted loop="true" id="myVideo" >
        <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/mused-1111.appspot.com/o/musicnotes-vid.mp4?alt=media&token=6eeea655-21a9-401a-a938-5d0b3772cce4"></source>
        </video>
        <SignUp/>
  
        <btmNav/>
         <p className="App-intro">{this.state.response}</p>

 
       
      </div>
    
    );
  }
}

export default Landing;
