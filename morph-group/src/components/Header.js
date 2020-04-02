import React from 'react'
import {NavLink, withRouter}  from 'react-router-dom'
class Header extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li className={this.getNavLinkClass("/"), "nav-link"}><NavLink to="/" >Home</NavLink></li>
                </ul>
            </div>
            </nav>
        )
    }
};
Header = withRouter(Header);
export default Header;
