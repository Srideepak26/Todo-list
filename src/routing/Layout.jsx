import React from 'react'
import Navbar from '../header/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
