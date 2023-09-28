import React from 'react'
import { Route} from 'react-router'
import { Navigate } from 'react-router-dom'
const Protectedroute = ({auth,component:Component,...rest}) => {
    <Route {...rest} render={(props) =>{

        if(auth) return <Component {...props} />
        if(!auth) return <Navigate replace to={{path : '/',state : {from:props.location}}} />
    }} />
  return Component;
  
}

export default Protectedroute