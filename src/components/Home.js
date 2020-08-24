import React from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
