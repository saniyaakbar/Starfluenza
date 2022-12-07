import React from 'react'
import './Services.css'
import vid from '../../ASSETS/mainVideo.mp4'
import { Link } from 'react-router-dom'

function ServiceSeg3() {
  return (
    <div className='servicesSeg3'>
        <div className="servicesSeg3_text">
          <h1 id='step3'>Step 3:</h1>
        <h1>Sit back and watch Stars getting added to your Brand!</h1>
        <Link to={'/FreeConsultation'}>
        <button>Leave Review</button>
        </Link>
        </div>
        <video src={vid} autoPlay loop muted></video>
    </div>
  )
}

export default ServiceSeg3