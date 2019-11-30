import React from "react";
import { Link } from "gatsby";
import logo from "../images/haskey.svg";

const Nav = () => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={logo} alt="HDP" width="56" height="28" />
      </Link>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="hdp-nav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="hdp-nav" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/" activeClassName="is-active">
          Home
        </Link>
        <Link className="navbar-item" to="/tactics" activeClassName="is-active">
          Tactics
        </Link>
        <Link className="navbar-item" to="/skills" activeClassName="is-active">
          Skills
        </Link>
        <Link className="navbar-item" to="/practices" activeClassName="is-active">
          Practices
        </Link>
        <Link className="navbar-item" to="/games" activeClassName="is-active">
          Games
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
