import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Userpage from "./pages/Userpage.jsx"



const App = () => {
  return (
  
    <Routes>
      <Route path='/' element={Userpage}></Route>
    </Routes>
 
  )
}

export default App
