import React from 'react'
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const email = window.localStorage.getItem('email') || null;

  if(email) {
    // window.location.href = '/todo';
    // return;
    return <Navigate to="/todo" />
  }

  return (
    <>{children}</>
  )
}

export default PublicRoute