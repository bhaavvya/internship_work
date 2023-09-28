import React, { useState } from 'react'
import Navbar from './Navbar'

const Contact = () => {
    const [user, setuser] = useState({
        email : "",
        password : "",
        message : ""
  
      })
  
   
      const handleChange= (event) =>{
        let name=event.target.name
        let value=event.target.value
        setuser({...user,[name]:value})
      }
  
        const handleSubmit = async (event) =>{
          event.preventDefault()
          const {email,password,message}=user
          try {
            const res = await fetch('/message',{
              method:'POST',
              headers:{
                "Content-type" : "application/json"
              },
              body:JSON.stringify({
                email,password,message
              })
  
            })
  
            if(res.status === 400 || !res){
              window.alert("invalid Credentials")
            }else{
              window.alert("Sent Succesfully")
              
            }
          } catch (error) {
            console.log(error)
          }
        }
  return (
    <>
    <Navbar />
        <section id='contact '>
        <div className='col-md-6 md-6 p-4 justify-content-center align-items-center' >
            <h1 className='display-6 fw-bolder mb-5' > CONTACT US </h1>
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
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Message</label>
                  <input type="textarea" className="form-control" id="exampleInputPassword1" name='message' value={user.message} onChange={handleChange}/>
                </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Submit</button>
            </form>
          </div>
        </section>
    </>
  )
}

export default Contact