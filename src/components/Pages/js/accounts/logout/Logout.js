import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

function Logout() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({username:"", password:"", accessToken:null});
  }
  return ( 
    <>
    {auth.accessToken ? (
      <button onClick={handleLogout}>Logout</button>
    ):(
      <Navigate to="/accounts/login" />
    )}
    </>
  )
}

export default Logout