import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import './Segments.css'

function Segments() {
  return (
    <div className='segments'>
        <h1 id='segmentTitle'>WE GET YOUR BRANDS</h1>
        <div className="segment_cards">
            <Card1/>
            <Card2/>
            <Card3/>

        </div>
    </div>
  )
}

export default Segments