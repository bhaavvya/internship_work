import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import Contact from './Contact'

const Home = () => {
  return (
    <>

    <Navbar />
        <section id='home'>
            <div className='container'>
                <div className='row justify-content-center '>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Hello, Start Your succesfull carrier with us.</h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>xyz</p>
                        <div className='buttons d-flex justify-content-center'>
                            <Link to="/login" className='btn btn-light me-4 rounded-pill px-4 py-2'>Get Started</Link>
                            <Link to="/seecourse" className='btn btn-light me-4 rounded-pill px-4 py-2'>See Courses</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Home