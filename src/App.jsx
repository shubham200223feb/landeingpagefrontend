import React from 'react'
import Hero from './components/Hero'
import Types from './components/Types'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import { Route, Router } from 'react-router-dom'
import Userpage from './pages/userpage'

const App = () => {
  return (
    <div >
<Router>
  <Route path='/' element={Userpage}></Route>
  </Router>      
    </div>
  )
}

export default App
