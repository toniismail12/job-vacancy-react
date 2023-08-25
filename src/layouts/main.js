import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Footer from './footer'

export default function Main({children}) {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <div className='min-h-screen pt-5'>
      {children}
      </div>
      <Footer/>
    </div>
  )
}
