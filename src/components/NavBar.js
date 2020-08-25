import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </div>
  );
};

export default NavBar;
