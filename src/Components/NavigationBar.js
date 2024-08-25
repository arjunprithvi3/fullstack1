import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#home">Food Donation System</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#overview">Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#plan">Project Plan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#impact">Impact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#nav" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#safety">Safety & Hygiene</a></li>
              <li><a className="dropdown-item" href="#technology">Technology & Tools</a></li>
              <li><a className="dropdown-item" href="#budget">Budget & Funding</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#contact">Contact Us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
