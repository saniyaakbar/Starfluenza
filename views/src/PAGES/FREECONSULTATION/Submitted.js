import React from 'react'
import Nav from '../../NAV/Nav'
import './FreeConsultation.css'

function Submitted() {
  return (
    <div className='submitted' >
        <Nav/>

        <div className="consultationBox">
        <h1 style={{"font-size":"3vmax" , "margin-top":"10vmax","margin-left":"-3vmax"}}>Hurrey! You took the first step!</h1>
        
        <p style={{"font-size":"1.5vmax" , "margin-top":"12vmax","margin-left":"3vmax"}}>Now sit back and relax. We will contact you soon</p>

        </div>
        

    </div>
  )
}

export default Submitted