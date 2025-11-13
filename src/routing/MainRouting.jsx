import React from 'react'
import { Userprovider } from './Userprovider'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import LoginForm from '../header/Login'
import { ProtectedRoute } from './Protected'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'

export const MainRouting = () => {
    return (
        <>
            <Userprovider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<LoginForm />} />
                        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
                        <Route path='/services' element={<ProtectedRoute><Services /></ProtectedRoute>} />
                        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                        <Route path='/login' element={<ProtectedRoute><LoginForm /></ProtectedRoute>} />

                    </Route>
                    
                </Routes>
                
            </Userprovider>

        </>

    )
}
