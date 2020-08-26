/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import Skill from './Skill';

const Track = (props) => {
  const { user } = props;

  return (
    <div>
      <h1>Track.it</h1>
      <h2>Welcome {user.email}</h2>
      <Skill />
    </div>
  );
};

export default Track;
