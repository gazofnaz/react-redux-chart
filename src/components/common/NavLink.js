import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "active" : "";

        return (
            <li className={className}>
                <Link {...this.props}/>
            </li>
        );
    }
}

// is this right?
NavLink.contextTypes = {
    router: React.PropTypes.object
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default NavLink;