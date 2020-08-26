import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const More = (props) => {
  const { handleLogout, loggedInStatus, history } = props;
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
      {loggedInStatus === 'LOGGED_IN' ? (
        <>
          <h1>More here</h1>
          <button type="button" onClick={() => handleLogoutClick()}>
            Logout
          </button>
        </>
      ) : (
        history.push('/')
      )}
    </div>
  );
};

More.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loggedInStatus: PropTypes.string.isRequired,
};

export default More;
