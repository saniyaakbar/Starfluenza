import React from 'react'
import "./Services.css"
import Nav from '../../NAV/Nav'
import SPOne from './SPOne'
import ServicesSeg4 from './ServicesSeg4'
import ServiceSeg3 from './ServiceSeg3'
import ServicesSeg2 from './ServicesSeg2'
import SPTwo from './SPTwo'
import Footer from '../Footer'
//All css of this page will be referred as SP for Service Page

function Services() {
  return (
    <div className='servicePage'>
        <Nav/>
        <SPOne/>
        <SPTwo/>
        <ServicesSeg2/>
        <ServiceSeg3/>
        <Footer/>
        {/* <ServicesSeg4/> */}
    </div>
  )
}

export default Services