import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  



  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container">
        <Link className="navbar-brand fw-bolder fs-4 mx-auto" to="/">WEB NAME</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/message">Contact Us</Link>
            </li>
            
           
          </ul>
        
          <Link to="/login" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
            <i className='fa fa-sign-in me-2'></i>Login</Link>
          <Link to="/register" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
            <i className='fa fa-user-plus me-2'></i>Register</Link>
            
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
