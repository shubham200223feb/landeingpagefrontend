import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg"

const Footer = () => {
  return (
    <div className='pl-10 w-screen flex items-center justify-between bg-gradient-to-r from-yellow-200 to-yellow-400 pr-10 mt-4'>
        <div>
<h1>Follow</h1>
<h1>Us On</h1>
        </div>
        <div className='flex gap-5 items-center justify-between'>
            <a href='https://www.instagram.com/sharma_makhana?igsh=ODE5bTRicHk1cmo5'><FaInstagram /></a>
      <a href='https://makhana-0nl6.onrender.com/'><CgWebsite /></a>

        </div>

      
    </div>
  )
}

export default Footer
