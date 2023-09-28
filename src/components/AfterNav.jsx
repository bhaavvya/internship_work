import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AfterNav = () => {
  



  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container">
        <Link className="navbar-brand fw-bolder fs-4 mx-auto" to="/">WEB NAME</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
        <Link to="/logout" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
            <i className='fa fa-sign-out me-2'></i>Logout</Link>
          
          
            
        </div>
      </div>
    </nav>
  );
};

export default AfterNav;
