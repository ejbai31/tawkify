import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <div className="nav-left">
      <Link className="logo" to={""}>
          <img src="assets/Tawkify_White_Logo.png" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to={""}>How it works</Link>
        <Link className="nav-link" to={""}>FAQ</Link>
        <Link className="nav-link" to={""}>Stories</Link>
        <Link className="nav-link" to={""}>Sign In</Link>
      </div>
    </div>
    <div className="nav-phone">
      <h4>1(888)494-7280</h4>
      <Link className="phone-box"to={""}>
        <div className="phone-box-content">
          <div className="phone-top">Chat with a love expert</div>
          <i className="fa fa-phone phone" aria-hidden="true"></i>
          <div className="phone-middle">CLICK HERE FOR</div>
          <div className="phone-bottom">FREE SCREENING</div>
        </div>
      </Link>
    </div>
  </div>
);

export default NavBar;