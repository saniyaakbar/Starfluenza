import React from 'react'
import './AboutUs.css'
import AboutSeg1 from './AboutSeg1'
import Nav from '../../NAV/Nav'
import Footer from '../Footer'

function AboutUs() {
  return (
    <div className='AboutUs'>
        <Nav/>
        <AboutSeg1/>
        <Footer/>
    </div>
  )
}

export default AboutUs