import React, { useEffect, useState } from 'react'
import "./Services.css"

import vid from '../../ASSETS/Compressedmoonvideo4.m4v'


function SPOne() {

    return (
        <div className='SPOne'>
            <div className="SPContainer">
                <div className="SP_Text">
                    <h1>Get <span>Ready</span> <br /> to Be A  <span>Star</span> Brand <br />
                        In just <span>3</span> steps</h1>
                    <p>Let's get <span>your</span> Brand Trending</p>

                </div>
                <video src={vid} autoPlay loop muted></video>

            </div>
            


            
        </div>
    )
}

export default SPOne