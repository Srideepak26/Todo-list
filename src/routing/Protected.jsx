import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from './UserContext'


export const ProtectedRoute = ({ children }) => {
   const { isLogin } = useContext(UserContext)


   if (!isLogin) {
      return <Navigate to={'/'} />
   }

   return children;
}