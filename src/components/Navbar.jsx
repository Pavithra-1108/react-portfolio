import React from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <a className="navbar-brand" href="#">MyPortfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Home','About','Skills','Projects','Contact'].map((sec) => (
              <li className="nav-item" key={sec}>
                <Link to={sec.toLowerCase()} smooth={true} duration={500} className="nav-link" style={{cursor:'pointer'}}>
                  {sec}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <span onClick={toggleDarkMode} className="nav-link" style={{cursor:'pointer'}}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
