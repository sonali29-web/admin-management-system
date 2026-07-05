import React, { useContext } from 'react'
import Loader from './Loader'
import { AuthContext } from '../store/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

 const {user,loading}=   useContext(AuthContext)

if(loading){
    return <Loader></Loader>
}

  return user ? <Outlet></Outlet>  : <Navigate to="/login" replace></Navigate>
}

export default ProtectedRoute;