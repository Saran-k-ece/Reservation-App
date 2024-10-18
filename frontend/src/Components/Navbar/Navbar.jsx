import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Navbar = ({setShowLogin}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <div className="navbar-logo">
            <h1>Heaven<span className='sub-logo'>Horizons</span></h1>
          </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.makemytrip.com/flights/?gclid=Cj0KCQjwpP63BhDYARIsAOQkATaBE5lyAAc9zOn8dEuIkwZbZlHX5VcjkMJAiYgDRQlryZZAI4WVsaEaAjz0EALw_wcB&cmp=SEM|D|DF|G|Generic|Generic-Generic_DT|DF_Generic_Exact|RSA|Offer3|673438880768&s_kwcid=AL!1631!3!673438880768!e!!g!!book%20flight%20tickets&ef_id=Cj0KCQjwpP63BhDYARIsAOQkATaBE5lyAAc9zOn8dEuIkwZbZlHX5VcjkMJAiYgDRQlryZZAI4WVsaEaAjz0EALw_wcB:G:s&gad_source=1">Flight</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.makemytrip.com/railways/?srsltid=AfmBOooj5rKtAp3ZuAx3z6kHZtaokTWZGcyehO0FbMTcJ4xKj6YoLoAw">Train</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.redbus.in/?gad_source=1&gclid=Cj0KCQjwpP63BhDYARIsAOQkATa6dKCszF8GvTwQ5lM7xUNyuGiWm63duPH6evvIa09-76J3XxiYrDAaApjCEALw_wcB">Bus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.makemytrip.com/cabs/">Cab</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/holidays">Holidays</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Forex</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Insurance</a>
            </li>
          </ul>
          <button className="btn btn-outline-success " type="button" onClick={() => setShowLogin(true)}>
          <i className="bi bi-person-circle custom-icon"></i>

            Login/SignUp
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
