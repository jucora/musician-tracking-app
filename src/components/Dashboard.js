/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const { loggedInStatus, history, handleLogout, user } = props;
  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        handleLogout();
        window.location.reload();
      })
      .catch((error) => {
        console.error('Logout error', error);
      });
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>Welcome {user.email}</h2>
      {loggedInStatus === 'LOGGED_IN' ? (
        <button type="button" onClick={() => handleLogoutClick()}>
          Logout
        </button>
      ) : (
        history.push('/')
      )}
    </div>
  );
};

Dashboard.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loggedInStatus: PropTypes.string.isRequired,
};

export default Dashboard;
