import React from 'react';
import axios from 'axios';

const Dashboard = props => {
  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        props.handleLogout();
        props.history.push('/');
      })
      .catch(error => {
        console.log('Logout error', error);
      });
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>
        Status:
        {props.loggedInStatus}
      </h2>
      {props.loggedInStatus === 'LOGGED_IN' ? (
        <button onClick={() => handleLogoutClick()}>Logout</button>
      ) : (
        props.history.push('/')
      )}
    </div>
  );
};

export default Dashboard;
