import React, { useState } from 'react'
import UserContext from './Context';

export const Userprovider = ({ children }) => {
   
  const validEmail ="sri11@gmail.com";
  const validPassword ="sri@22"

  const [isLogin, setIsLogin] = useState(false);

  const Login = (email,password) => {
    if (email === validEmail && password === validPassword) {
      setIsLogin(true)
      return true;
    } else {
      setIsLogin(false)
      return false;
    }
  }


  return (
    <UserContext.Provider value={{isLogin,Login}}>
      {children}
    </UserContext.Provider>
  )
}
