import React, { useEffect, useState } from 'react'
import logo from '../ASSETS/logo.png'
import star from '../ASSETS/star.png'
import vid from '../ASSETS/mainVideo.mp4'

function MainBox() {

    const [serviceList, setserviceList] = useState([])

    const data = [
        "Social Media Strategies", "Campaigns","Celebrity Video Recommendations","Catalogue Shoots","Ads & TVCs","Brand Ambassadors","Event Presence"
    ]

    useEffect(() => {
      setserviceList(data);
    
      return () => {
      }
    }, [])
    


    return (
        <div className='pageOne_MainBox'>
            <video src={vid} autoPlay loop muted></video>
            <div className="mainBox_centerText">
                {/* <img id='mainBox_img1' src={logo} alt="" /> */}

                <h1>Adding Stars to Your Brand</h1>

                {/*Add Animation */}

                {/* <h1>Welcome to <br />
                    Starfluenza
                </h1> */}

                <p>One celebrity at a time</p>

                <button>Get in Touch</button>
            </div>

            <div className="mainBox_serviceList">
                {serviceList.map((e,i)=>{
                    return <div key={i} className="mainBox_service">
                        <p>{e}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default MainBox