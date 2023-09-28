/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
const Login = () => {
  const navigate=useNavigate()
  const [isLoggedIn, setisLoggedIn] = useState(null);
    const [user, setuser] = useState({
      email : "",
      password : "",
      isLoggedIn: false

    })

    useEffect(() => {
      // This effect will run whenever isLoggedIn changes.
      if (isLoggedIn) {
        if (user.email === 'admin123@gmail.com' && user.password === 'admin123') {
          // Navigate to admin portal if isLoggedIn is true.
          navigate('/adminportal');
        } else {
          // Navigate to another route if isLoggedIn is true (after login route).
          navigate('/afterlogin');
        }
      }
    }, [isLoggedIn, user.email, user.password, navigate]);
    const handleChange= (event) =>{
      let name=event.target.name
      let value=event.target.value
      setuser({...user,[name]:value})
    }

      const handleSubmit = async (event) =>{
        event.preventDefault()
        const {email,password}=user
        try {
          const res = await fetch('/login',{
            method:'POST',
            headers:{
              "Content-type" : "application/json"
            },
            body:JSON.stringify({
              email,password
            })

          })

          if(res.status === 400 || !res){
            window.alert("invalid Credentials")
          }else{
            window.alert("Login Succesfully")
            setisLoggedIn(true)
            // if(email === "admin123@gmail.com" && password === "admin123"){
            //   console.log("hii")
            //  // isLoggedIn ? <Navigate to="/adminportal" /> : <Login />
            //    navigate('/adminportal')
               console.log("before ",isLoggedIn)
            //   }
            
              if (user.email === 'admin123@gmail.com' && user.password === 'admin123') {
                // Navigate to admin portal if isLoggedIn is true.
                navigate('/adminportal');
              } else {
                // Navigate to another route if isLoggedIn is true (after login route).
                navigate('/afterlogin');
              }
            

          }
        } catch (error) {
          console.log(error)
        }
      }
  return ( <>
  <Navbar />
    <div className='container shadow m-5' >
      <div className='row justify-content-center ' >
        <div className='col-md-5  d-flex flex-column align-items-center text-white justify-content-center form' >
          <h1 className='display-4 fw-bolder mb-4 text-center text-white' > Welcome back </h1>
          <p className='lead text-center fs-4 mb-5 text-white' > Enter Your Credentials to login </p>
          <h5 className='mb-4 text-white'>OR</h5>
              <Link to="/register"className='btn btn-light me-4 rounded-pill px-4 py-2 ' > Register </Link>
        </div>
          <div className='col-md-6 md-6 p-4' >
            <h1 className='display-6 fw-bolder mb-5' > LOGIN </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={user.email} onChange={handleChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleChange}/>
                </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Login In</button>
            </form>
          </div>
        </div>
    </div>

    </>
      )
}

export default Login