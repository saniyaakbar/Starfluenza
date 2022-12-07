import React from 'react'
import { Link } from 'react-router-dom'
import "./Strip.css"
import logo from '../ASSETS/logo.png'
import facebook from "../ASSETS/LOGOS/facebook-icon.webp"
import insta from "../ASSETS/LOGOS/Instagram-icon.webp"
import twitter from "../ASSETS/LOGOS/youtube-icon.webp"
import linkedin from '../ASSETS/LOGOS/linkedin-logo.png'

function Footer() {

  var icons = [
    // linkedin,
    insta,
    twitter,
    facebook]


  return (
    <div className='footer'>
      <div className="footer_left">
        <img src={logo} alt="" />
      </div>
      <p className='contactInfo'>
         brand@starfluenza.com 
      </p>
      <p id='contactNumber' className='contactInfo'>+91 8007136123</p>
      <p id='contact_location' className='contactInfo'>Mumbai, Maharashtra, India</p>
      {/* <div className="footer_right"> */}
      <div id="icons">
        {
          icons.map((e, i) => <div key={i} className='icon'><Link key={i} to="/"><img className='iconImg' src={e} alt="" /></Link></div>)
        }

      </div>
      {/* </div> */}
    </div>
  )
}

export default Footer