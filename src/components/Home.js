import React from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log('Logout error', error);
      });
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
        {this.props.loggedInStatus === 'NOT_LOGGED_IN' ? (
          [
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />,
            <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />,
          ]
        ) : (
          <button onClick={() => this.handleLogoutClick()}>Logout</button>
        )}
      </div>
    );
  }
}
