import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarTop() {
  return (
    <div className="navbar-section">
      <div className="techvio-responsive-nav">
        <div className="container">
          <div className="techvio-responsive-menu">
            <div className="logo">
              <a href="index.html">
                <img
                  src="assets/img/logo.png"
                  className="white-logo"
                  alt="logo"
                />
                <img
                  src="assets/img/logo-black.png"
                  className="black-logo"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="techvio-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img
                src="assets/img/logo.png"
                className="white-logo"
                alt="logo"
              />
              <img
                src="assets/img/logo-black.png"
                className="black-logo"
                alt="logo"
              />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    {" "}
                    Home
                    <i className="fas fa-chevron-down" />
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link">
                        Home 1
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About Us{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/service" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className="nav-link">
                    Portfolio 
                  </NavLink>
                  {/* <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="portfolio.html" className="nav-link">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="single-portfolio.html" className="nav-link">
                        Portfolio Details
                      </a>
                    </li>
                  </ul> */}
                </li>
               
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="other-option">
                <a className="default-btn" href="mailto:demo@example.com">
                  Get It Support <span />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
