import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        to="/skillForm"
      >
        Add Skill
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        to="/track"
      >
        Track.it
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/progress"
      >
        Your Progress
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/more"
      >
        More
      </NavLink>
    </div>
  );
};

export default NavBar;
