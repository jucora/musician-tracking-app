/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const More = (props) => {
  console.warn(props.user);
  const { handleLogout, loggedInStatus, history, user } = props;
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
    <div className="moreBox">
      {loggedInStatus === 'LOGGED_IN' ? (
        <>
          <h1>Account</h1>
          <p>User: {user.email}</p>
          <p>Your ID: {user.id}</p>
          <p>Registered since: {user.created_at}</p>
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

const mapStateToProps = (state) => ({
  user: state.musicianReducer.user,
});

export default connect(mapStateToProps, null)(More);
