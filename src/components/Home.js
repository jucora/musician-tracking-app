import React from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    console.log('data es', data);
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/dashboard');
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
    const { loggedInStatus } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <h2>
          Status:
          {loggedInStatus}
        </h2>
        {loggedInStatus === 'NOT_LOGGED_IN' ? (
          [
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} key={1} />,
            <Registration
              handleSuccessfulAuth={this.handleSuccessfulAuth}
              key={2}
            />,
          ]
        ) : (
          <button onClick={() => this.handleLogoutClick()}>Logout</button>
        )}
      </div>
    );
  }
}
