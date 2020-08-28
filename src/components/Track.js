/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import Skill from './Skill';

const Track = (props) => {
  const { user, loggedInStatus, history } = props;
  return loggedInStatus === 'LOGGED_IN' ? (
    <div className="track">
      <h1>Track.it</h1>
      <h2>Welcome {user.email}</h2>
      <Skill />
    </div>
  ) : (
    (history.push('/'), true)
  );
};

export default Track;
