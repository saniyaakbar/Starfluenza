import React from 'react'
import './Services.css'
import vid from '../../ASSETS/mainVideo.mp4'

function ServiceSeg3() {
  return (
    <div className='servicesSeg3'>
        <div className="servicesSeg3_text">
        <h1>Sit back and watch Stars getting added to your Brand!</h1>
        <button>Leave Review</button>
        </div>
        <video src={vid} autoPlay loop muted></video>
    </div>
  )
}

export default ServiceSeg3