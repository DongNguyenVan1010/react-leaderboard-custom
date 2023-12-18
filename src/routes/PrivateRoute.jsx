import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const email = window.localStorage.getItem('email') || null;

  if(!email) {
    return <Navigate to="/login" />
  }

  return (
    <>{children}</>
  )
}

export default PrivateRoute