import React from 'react'
import './Segments.css'
import image1 from '../ASSETS/fans.png'

function Card1() {
    return (
        <div className='segment_card'>
            <img src={image1} alt="" />
            <h1>FANS</h1>
            <div className="segment_card_text">

                <p>Your struggle to make your brand known ends here. With an impeccable celebrity like aura around your brand, we help you create loyal customers who become its long term real Fans.</p>
                <p>See your conversation rate skyrocket!
                </p>
                {/* <button id='card_btn'>Connect Now */}
                {/* </button> */}
            </div>

        </div>
    )
}

export default Card1