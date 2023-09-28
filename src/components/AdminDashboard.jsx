import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

const AdminNavbar = () => {
    const [entryCount, setEntryCount] = useState(0);

    useEffect(() => {
      // Fetch the entry count from the server using the fetch API
      fetch('/entryCount')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setEntryCount(data.data.length);
          console.log(entryCount)
        })
        .catch((error) => {
          console.error('Error fetching entry count:', error);
        });
    }, []);
  



  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow ">
      <div className="container">
        <Link className="navbar-brand fw-bolder fs-4 mx-auto " to="/">Navbar scroll</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
            
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4 " to="/adminportal">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4 " to="/addcourse" role="button"  aria-current="page">
                Add Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4 " to='/seecourse'>Courses</Link>
            </li>
          </ul>
            <Link to="/logout" className='btn btn-outline-primary ms-2 px-4 rounded-pill '>
            <i className='fa fa-sign-out me-2 '></i>Logout</Link>
        </div>
      </div>
    </nav>

    <div className='container shadow m-5 bg-grey' >
      
        
          <div className='col-md-60 md-6 p-4 bg-grey' >
            <h1 className='display-6 fw-bolder mb-5 ' > Charts </h1> 
            <div className='d-flex flex-row align-items-center justify-content-center'>
            <PieChart style={{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.2)",width:"50%",padding:"5px",backgroundColor:"whitesmoke",borderRadius:"5px 3px 3px 3px"}}
  data={[
    { title: 'Registered', value: entryCount, color: '#C13C37' },
    { title: 'Total', value: 10, color: '#6A2135' },
  ]} />
  <h3 >PieChart of Number of Registered Students</h3>
  
  
</div>
<h4 >Number of Registered Students= {entryCount}</h4>
          </div> 

</div> 
    </>
  );
};

export default AdminNavbar;
