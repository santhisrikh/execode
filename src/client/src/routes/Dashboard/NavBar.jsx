import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-file-code" />
            <span className="text-monospace"> ExeCode</span>
          </a>
          <div
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </div>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
              <li role="presentation" className="nav-item">
                <Link className="nav-link text-light" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li role="presentation" className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/settings">
                  Settings
                </Link>
              </li>
              <li role="presentation" className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/profile">
                  Profile
                </Link>
              </li>
              <li role="presentation" className="nav-item">
                <NavLink
                  className="nav-link text-light"
                  to="/dashboard/reports"
                >
                  Reports
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
