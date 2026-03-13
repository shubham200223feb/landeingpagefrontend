import React from 'react'
import { Route, Router } from 'react-router-dom'
import Userpage from "./pages/Userpage"



const App = () => {
  return (
   <div>
    <Router>
      <Route path='/' element={Userpage}></Route>
    </Router>
   </div>
  )
}

export default App
