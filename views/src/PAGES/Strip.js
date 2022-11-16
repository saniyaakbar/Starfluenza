import React from 'react'
import './Strip.css'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import vid from '../ASSETS/mainVideo.mp4'
import facebook from "../ASSETS/LOGOS/facebook-icon.webp"
import insta from "../ASSETS/LOGOS/Instagram-icon.webp"
import twitter from "../ASSETS/LOGOS/youtube-icon.webp"
function Strip() {

    const formSubmit = (e) => {
            e.preventDefault();
    }

    var icons = [
        // linkedin,
        insta,
        twitter,
        facebook]
    

  return (
    <div className='strip'>
        <div id="strip_icons">
        {/* {
          icons.map((e, i) => <div key={i} className='strip_icon'><Link key={i} to="/"><img className='iconImg' src={e} alt="" /></Link></div>)
        } */}

      </div>
        <video src={vid} autoPlay loop muted></video>
        <div className="strip_card">
            <h2>We basically do Marketing that sells! </h2>
            <button className='strip_btn'>Get in Touch</button>
        </div>

        {/* <div className="strip_left">
            <h2>STAY CONNECTED <br /> WITH OUR NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel dolore, ea dolores repudiandae provident eos voluptatum! Fugit, facilis repellat.</p>
            <form onSubmit={(e) => formSubmit(e)}>
                <input type="text" />
                <button>Submit</button>
            </form>
        </div> */}



        {/* <Footer/> */}
    </div>
  )
}

export default Strip