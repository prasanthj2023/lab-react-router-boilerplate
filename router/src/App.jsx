import React from 'react'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
    </>
  )
}

export default App