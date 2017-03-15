import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
      <nav className="text-center">
          <IndexLink to="/" activeClassName="active">Chart</IndexLink>
          {" | "}
          <Link to="/settings" activeClassName="active">Settings</Link>
      </nav>
  );
};

export default Header;