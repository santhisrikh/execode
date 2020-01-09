/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
// import styles from "./NavBarPublic.module.css";

const NavBar = ({ location: { pathname } }) => {
  if (pathname.startsWith("/dash")) return null;
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
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
                <Link className="nav-link text-light" to="/login">
                  Login
                </Link>
              </li>
              <li role="presentation" className="nav-item">
                <Link className="nav-link text-light" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
