import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const Logout = () => {
    const navigate = useNavigate()
    const logout = async() =>{
        try {
            const res = await fetch('/logout',{
                method:'GET',
                headers:{
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials:"include"
            })

            if(res.status === 401 || !res){
                window.alert("please logout later")
            }else{
                navigate('/')
                window.location.reload()
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        logout()
      }, [])
        
    
    
    
  return (
    <>
    
    </>
  )
}

