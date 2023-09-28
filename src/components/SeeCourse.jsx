import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
function CourseCard({ course }) {
  return (
    <>
    <div className='card bg-bg-light-subtle justify-content-center rounded-3 d-flex flex-column' >
    <div className="card row-3" style={{border: "1px solid #ddd",borderRadius: "4px",padding: "10px",margin: "10px",boxShadow:" 0 2px 4px rgba(0, 0, 0, 0.1)",backgroundColor: "black"}}>
      <h2 className='text-white'>{course.name}</h2>
      <p className='text-white-50'>Author: {course.author}</p>
      <Link to={course.link} alt="link" className='btn btn-outline-primary ms-2 px-4 rounded-pill text-white'><i className='fa fa-eye me-2 text-white'></i>Watch</Link>
    </div>
    </div>
    </>
  );
}

function SeeCourse () {
  const [course, setcourse] = useState([]);

  useEffect(() => {
    // Fetch course data from the server using the fetch API
    fetch('/seecourse')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setcourse(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Course List</h1>
      <div className="course-container">
        {course.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default SeeCourse;
