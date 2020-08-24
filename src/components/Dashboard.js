import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
      </div>
    );
  }
}
