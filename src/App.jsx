import React from 'react'
import { Route, Router } from 'react-router-dom'
import Userpage from "./pages/Userpage.jsx"



const App = () => {
  return (
  
    <Router>
      <Route path='/' element={Userpage}></Route>
    </Router>
 
  )
}

export default App
