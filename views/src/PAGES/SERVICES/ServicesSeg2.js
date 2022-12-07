import React from 'react'
import './Services.css'
import image from '../../ASSETS/customized.png'
import { Link } from 'react-router-dom'

function ServicesSeg2() {

  
  return (
    <div className='servicesSeg2'>
      <h1 style={{"fontFamily" : "ogg", "fontSize" : "2.5vmax", "position" : "absolute", "left" : "46%"}}>Step 2 :</h1>
        <div className="servicesSeg2_left">
            <img src={image} alt="" />
        </div>
       <div className="servicesSeg2_right">
       <div className="serviceSeg2_text">
                        <h1>Review Your <span>Customised</span> Plan</h1>
                        <h1><span>T</span>eamwork makes the dream work, right?</h1>
                        <div className="serviceSeg2_text_p">
                        <p>Check your email inbox for the customised plan we made for you and feel free to get EXCITED!</p>
                        <p>Want to discuss the Plan of Action?</p>
                        <Link to={'/FreeConsultation'}>
                        <button>Request Call</button>

                        </Link>

                        </div>
                        
                </div>
       </div>
    </div>
  )
}

export default ServicesSeg2