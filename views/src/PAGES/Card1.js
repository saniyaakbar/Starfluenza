import React from 'react'
import './Segments.css'
import image1 from '../ASSETS/attentionHome.png'

function Card1() {
    return (
        <div className='segment_card'>
            <img src={image1} alt="" />
            <h1>ATTENTION</h1>
            <div className="segment_card_text">

            <p>The industry demands your brand to have a face, a voice and an identity.</p>
            <p>Starfluenza provides solutions to enhance your Brand's presence on social media and beyond with perfectly integrated Celebrity & Influencer Campaigns, top-notch plans for regular social advertising needs, events, outdoor publications, and budget-friendly results. 
</p>
            </div>
            
        </div>
    )
}

export default Card1