import React from 'react';
import Registration from './auth/Registration';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Registration />
      </div>
    );
  }
}
