import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Partner from './Partner'
import Service from './Service'
import SecondService from './SecondService'
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Partner/>
        <Service/>
        <SecondService/>
        <Footer/>
    </div>
  )
}

export default HomePage