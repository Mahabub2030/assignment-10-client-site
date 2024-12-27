import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='flex justify-center items-center mt-[300px] mb-[350px]'><span className="loading loading-ring loading-lg"></span></div>
    }
    if(!user){
        return <Navigate  state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children
        
    
};

export default PrivateRoute;