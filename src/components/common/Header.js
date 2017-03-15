import React, {PropTypes} from 'react';
import NavLink from "../common/NavLink";

const Header = () => {

  return (
      <nav>
          <ul className="nav nav-tabs nav-justified">
              <NavLink to="/">Chart</NavLink>
              <NavLink to="/settings">Settings</NavLink>
          </ul>
      </nav>
  );
};

export default Header;
