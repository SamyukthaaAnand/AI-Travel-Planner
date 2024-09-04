import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center'>
      <h1
      className='font-extrabold text-[50px] text-center mt-20'>     
      Your AI-Powered Travel <span className='text-[#f59309]'>Companion.</span></h1>
      <p className='text-xl text-gray-500 text-center'>From dream to departure, our AI trip planner curates the ultimate travel experience just for you.</p><br></br>

      <a href={'/create-trip'}>
        <Button className='cursor-pointer'>Get started, It's free</Button>
        </a>

        <img src='/landing.png' className='mt-28'/>
    </div>
  )
}

export default Hero