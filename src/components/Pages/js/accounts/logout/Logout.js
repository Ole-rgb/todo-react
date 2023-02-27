import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../../../context/AuthProvider'
import { Navigate } from 'react-router-dom';

function Logout() {
  const { auth, setAuth } = useContext(AuthContext);
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