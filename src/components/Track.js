/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import Skill from './Skill';

const Track = (props) => {
  const { user, loggedInStatus, history } = props;
  return loggedInStatus === 'LOGGED_IN' ? (
    <div className="track">
      <h2>Hello {user.email}</h2>
      <h1>Total Score</h1>

      <Skill />
    </div>
  ) : (
    (history.push('/'), true)
  );
};

export default Track;
