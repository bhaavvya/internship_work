import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Login from './components/Login';
import Register from './components/Register';
import { Logout } from './components/Logout';
import AdminDashboard from './components/AdminDashboard';
import AfterNav from './components/AfterNav';
import AddCourse from './components/AddCourse';
import SeeCourse from './components/SeeCourse';
import { useState } from 'react'
import Protectedroute from './components/ProtectedRoutes';
import Contact from './components/Contact';
// Dummy authentication state (replace with your actual authentication logic)


function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async() =>{
    try {
      const res=await fetch('/auth',{
        method : 'GET',
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      })

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    isLoggedIn();
  
    
  }, [])
  
  return (
    <>
      
      <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/message" element={<Protectedroute auth={auth1} component={<Contact />} /> } />
    <Route path="/login" element={<Protectedroute auth={auth1} component={<Login />} /> } />
    <Route path="/register" element={<Protectedroute auth={auth1} component={<Register />} /> } />
    <Route path="/logout" element={<Logout/>} />
    <Route path="/adminportal" element={<Protectedroute auth={auth} component={<AdminDashboard />} /> }/>
    <Route path="/afterlogin" element={<Protectedroute auth={auth} component={<AfterNav />} /> }/>
    <Route path="/addcourse" element={<Protectedroute auth={auth} component={<AddCourse />} /> }/>
    <Route path="/seecourse" element={<SeeCourse/>} />
  </Routes>
    </>
  );
}

export default App;
