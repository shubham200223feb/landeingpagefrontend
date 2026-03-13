import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Userpage from "./pages/Userpage.jsx"
import Admin from './pages/Admin.jsx'



const App = () => {
  return (
  
    <Routes>
      <Route path='/' element={<Userpage/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
 
  )
}

export default App
