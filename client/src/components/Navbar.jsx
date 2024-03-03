import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './buttons.css';
import './nav.css';

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            <Link className="navbar-brand f-bold order-1 order-lg-0" to="/" style={{ fontSize: '30px' }}>
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <button
              className="navbar-toggler bg-dark text-light order-2"
              type="button"
              onClick={toggleNavbar}
              aria-expanded={isNavbarOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''} order-3 order-lg-2`} id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <Link
                  className="nav-btns btn text-white mx-3 btn-lg"
                  aria-current="page"
                  to="/"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
                <Link
                  className="nav-btns btn text-white mx-3 btn-lg"
                  aria-current="page"
                  to="/material"
                  onClick={toggleNavbar}
                >
                  Materials
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
