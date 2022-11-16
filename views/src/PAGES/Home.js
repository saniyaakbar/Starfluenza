import React from 'react'
import Nav from '../NAV/Nav'
import PageOne from './PageOne'
import Segments from './Segments'
import './PageOne.css'
import Services from './Services'
import Strip from './Strip'
import Footer from './Footer'
import Team from './Team'

function Home() {
  return (

    <div className='home'>
        <Nav/>
        <PageOne/>
       <Segments/>
       <Services/>
       <Team/>
       <Strip/>
       <Footer/>
    </div>
  )
}

export default Home