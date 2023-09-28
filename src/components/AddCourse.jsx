import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import AfterNav from './AfterNav'
const AddCourse = () => {
  const navigate=useNavigate()

    const [course, setcourse] = useState({
      name : "",
      author : "",
      link : ""

    })

    const handleChange= (event) =>{
      let name=event.target.name
      let value=event.target.value
      setcourse({...course,[name]:value})
    }

      const handleSubmit = async (event) =>{
        event.preventDefault()
        const {name,author,link}=course
        try {
          const res = await fetch('/addcourse',{
            method:'POST',
            headers:{
              "Content-type" : "application/json"
            },
            body:JSON.stringify({
              name,author,link
            })

          })

          if(res.status === 400 || !res){
            window.alert("invalid Credentials")
          }else{
            window.alert("Added Succesfully")
              navigate('/adminportal')
            }
            
          
        } catch (error) {
          console.log(error)
        }
      }
  return ( <>
  <AfterNav />
    <div className='container shadow m-5 bg-white' >
      <div className='row justify-content-center ' >
        <div className='col-md-5  d-flex flex-column align-items-center text-white justify-content-center form' >
          <h1 className='display-4 fw-bolder mb-4 text-center text-white' > Welcome back </h1> 
          <p className='lead text-center fs-4 mb-5 text-white' > Enter Details of Course </p>
          <h5 className='mb-4 text-white'>OR</h5>
              <Link to="/seecourse"className='btn btn-light me-4 rounded-pill px-4 py-2 ' > See Courses </Link> 
        </div> 
          <div className='col-md-6 md-6 p-4' >
            <h1 className='display-6 fw-bolder mb-5' > Course Details </h1> 
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name of Course</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name='name' value={course.name} onChange={handleChange}/>
                
              </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Name of Author</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" name='author' value={course.author} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Link of the Course</label>
                  <input type="link" className="form-control" id="exampleInputPassword1" name='link' value={course.link} onChange={handleChange}/>
                </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Add</button>
            </form>
          </div> 
        </div> 
    </div> 

    </>
      )
}

export default AddCourse