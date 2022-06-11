import React from 'react'
import { Navigate } from 'react-router-dom'
import { SIGN_IN_ROUTE } from '../../routes/routes'

const useAuth = () => {
  const user = localStorage.getItem('user')
  if (user) {
    return true
  }
  return false
}

function PrivateRoute({ component: Component }) {
  const user = useAuth()
  return user ? Component : <Navigate to={`/${SIGN_IN_ROUTE}`} />
}

export default PrivateRoute
