import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import Button from '@material-ui/core/Button';


export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/' after login
    this.props.login('/');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Button color='inherit' onClick={this.logout}>Logout</Button> :
      <Button color='inherit' onClick={this.login}>Login</Button>;
  }
});