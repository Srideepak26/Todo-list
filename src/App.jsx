import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { MainRouting } from './routing/MainRouting'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <MainRouting/>
    </BrowserRouter>
    </>
  )
}

export default App