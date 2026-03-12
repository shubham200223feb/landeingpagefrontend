import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { gsap } from "gsap";
import { g } from 'framer-motion/client';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const imageRef = useRef()
    useEffect(()=>{
gsap.to(imageRef.current,{
  x:"-40%",
    opacity:1,
    duration:1,
    ease:"power3.out"

})
gsap.to(imageRef.current,{
  x:0,
    opacity:1,
    duration:0.75,
    delay:1,
    ease:"power3.out"

})
gsap.to(imageRef.current,{
  x:300,
    opacity:1,
    delay:1.75,
    duration:0.5,
    ease:"power3.out"

})
gsap.to(imageRef.current,{
  x:0,
    opacity:1,
    duration:0.4,
    delay:2.25,
    ease:"power3.out"

})
    },[])
  return (
    <div id='Home' className='h-full w-full'>
   <div className='w-full'>
     <div className='z-50 hidden md:flex md:fixed w-full  items-center justify-between pl-5 pr-5 backdrop-blur-sm '>
        <a href='#'>Logo</a>
        <div className='flex gap-2 items-center '>
            <a href='#Home'>Home</a>
            <a href='#Type'>Types</a>
            <a href='#Feedback'>Feedback</a>
        </div>
<div><video autoPlay loop muted className='h-[2vw] object-center rounded-full' src="/headeing video.mp4"/></div>
    </div>
  
       <div className="flex md:hidden justify-between items-center px-5 py-4 ">

        <a>Logo</a>

      
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

      </div>
  {menuOpen && (
        <div className="flex flex-col gap-4 px-5 py-4 b md:hidden items-center  inset-0 bg-black/30 backdrop-blur-sm ">

          <a onClick={()=>{
            setMenuOpen((prev)=>{
                return !prev;
            })
          }} href='#home'>Home</a>
          <a onClick={()=>{
            setMenuOpen((prev)=>{
                return !prev;
            })
          }} href='#type'>Types</a>
          <a onClick={()=>{
            setMenuOpen((prev)=>{
                return !prev;
            })
          }} href='#Feedback'>Feedback</a>
          <a onClick={()=>{
            setMenuOpen((prev)=>{
                return !prev;
            })
          }} href='#Contact'>Contact</a>

        </div>
      )}

    </div>
    <div className=' flex items-center justify-center mt-5'>
        <h1 className=' absolute text-shadow-amber-50 text-amber-50 text-[15vw] font-extrabold'>MAKHANA</h1>
        <motion.img ref={imageRef} whileHover={{ 
        rotate:360, 
        transition: { duration: 1 } 
      }} whileTap={{ 
        rotate:360, 
        transition: { duration: 1 } 
      }}  className=' z-10 w-[50vw] md:w-[30vw] h-[80vh] cursor-pointer' src='/front.png'></motion.img>
    </div>
      
    </div>
  )
}

export default Hero
