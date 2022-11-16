import React from 'react'
import './Services.css'
import logo from '../../ASSETS/logo.png'

function ServicesSeg4() {
  return (
    <div className='servicesSeg4'>
       
        <div className="serviceSeg4_left">
                <div className="serviceSeg4_text">
                        <h1>Do you wish to <span>customise</span> your steps too?</h1>
                        <h1>Or Did we <span>spark</span> the curious <br /> <span>marketing</span> geek in you?</h1>
                        <p>Let us answer all your questions in one-go,</p>
                        <p>(of course, we know you’re busy!)</p>
                        <p>Connect with us on — or right to us at info@starfluenza.com</p>
                </div>
        </div>

        <div className="serviceSeg4_right">
            <img src={logo} alt="" />
        </div>

    </div>
  )
}

export default ServicesSeg4