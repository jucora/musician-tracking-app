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
          Add Skill
        </NavLink>
      </div>
      <div className="navBarLinkBox">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/track"
        >
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
          More
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
