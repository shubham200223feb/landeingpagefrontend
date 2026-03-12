import React from 'react'
import Hero from './components/Hero'
import Types from './components/Types'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-400 to-yellow-700 w-screen h-screen mb'>
      <Hero/>
      <Types/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default App
