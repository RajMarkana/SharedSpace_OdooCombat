import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
    <div className='px-4 text-secondary py-2'>
      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default Home