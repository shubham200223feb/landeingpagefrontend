import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Userpage from "./pages/Userpage.jsx"
import Admin from './pages/Admin.jsx'
import Feedbackpage from './pages/Feedbackpage.jsx'



const App = () => {
  return (
  
    <Routes>
      <Route path='/' element={<Userpage/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/feedback' element={<Feedbackpage/>}></Route>
    </Routes>
 
  )
}

export default App
