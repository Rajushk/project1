import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({islogin,children}) => {

    if(islogin){
        return children;
    }
    else{
        return <Navigate to ="/login"/>
    }
//   )
}

export default PrivateRoute