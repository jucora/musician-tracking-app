import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLinkBox">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/skillForm"
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img style={{ width: '30%' }} src={require('../img/add.svg')}></img>
          </div>
          Add Skill
        </NavLink>
      </div>
      <div className="navBarLinkBox">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/track"
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              style={{ width: '30%' }}
              src={require('../img/track.svg')}
            ></img>
          </div>
          Track.it
        </NavLink>
      </div>
      <div className="navBarLinkBox">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/progress"
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              style={{ width: '30%' }}
              src={require('../img/progress.png')}
            ></img>
          </div>
          Your Progress
        </NavLink>
      </div>
      <div className="navBarLinkBox">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/more"
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              style={{ width: '30%' }}
              src={require('../img/more.svg')}
            ></img>
          </div>
          More
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
