import React from 'react'
import './Team.css'

function Team() {
  return (
    <div className='team'>

        <h1> The Mothers of Starfluenza! </h1>
        <div className="team_cards">
        <div className="team_card">
            <div className="team_text">
                <h1>FOUNDER & CEO:</h1>
                <h2>Gayatri Yeramkar</h2>
                <p>“Harsh truth — People judge a book by its cover. We make your cover the talk of town, the star of your niche!”</p>
            </div>
        </div>

        <div className="team_card">
            <div id='two' className="team_text">
                <h1>CO-FOUNDER:</h1>
                <h2>Priyanka Binoop</h2>
                <p>“The star is always yours to get, we just help you reach it easier and quicker.”</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Team