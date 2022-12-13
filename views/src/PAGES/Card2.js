import React from 'react'
import './Segments.css'
import image1 from '../ASSETS/leads.png'

function Card1() {
    return (
        <div className='segment_card'>
            <img src={image1} alt="" />
            <h1>LEADS</h1>
            <div className="segment_card_text">

            <p>Our expertise relies in making your brand stand-out like a star, a celebrity in the world of 300M+ Brands worldwide. From a small token of celebrity video wish, to an event presence, from helping you conceptualise your first digital ad to making your next viral TVC, we do it all.
</p>
            </div>
            
        </div>
    )
}

export default Card1