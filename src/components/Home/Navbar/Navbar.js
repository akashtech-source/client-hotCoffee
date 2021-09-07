import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand fs-4 text-white" href="/">
            HotCoffee
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active me-3 text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active me-3 text-white" to="/login">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active me-3 text-white"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item me-3 d-flex align-items-center text-white">
                <FacebookIcon />
              </li>
              <li className="nav-item me-3 d-flex align-items-center text-white">
                <TwitterIcon />
              </li>
              <li className="nav-item me-3 d-flex align-items-center text-white">
                <PinterestIcon />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
