/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

const Track = (props) => {
  const { user, loggedInStatus, history } = props;
  return loggedInStatus === 'LOGGED_IN' ? (
    <div className="track">
      <h2>Hello {user.email}</h2>
      <Skill />
    </div>
  ) : (
    (history.push('/'), true)
  );
};

Track.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  loggedInStatus: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Track;
