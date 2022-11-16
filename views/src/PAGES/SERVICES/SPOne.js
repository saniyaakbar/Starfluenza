import React, { useEffect, useState } from 'react'
import "./Services.css"
import image2 from '../../ASSETS/demoImage.avif'
import image3 from '../../ASSETS/demoImage2.avif'
import image4 from '../../ASSETS/demoImage3.avif'
import vid from '../../ASSETS/MoonVid2.mp4'


function SPOne() {

    const [services, setServices] = useState([])

    let data = [
        {
            text: "Social Media Strategies",
            class: "service_card main_service_class ",
            image: image2,
            data:"Get Customised strategies to suit your brand needs with the right celebrity touch to spark fire."
        },
        {
            text: "Campaigns",
            class: "service_card secondary_service_class  right_service_card",
            image: image3,
            data:"From digital to on-ground, these personalised campaigns are all your brands need to become the talk of every town. "
        },
        {
            text: "Celebrity Video Recommendations",
            class: "service_card secondary_service_class no_display",
            image: image4,
            data:"Word of mouth works like magic, so how about some words of appreciation from your favourite celebrity for your brand? "
        },
        {
            text: "Catalogue Shoots",
            class: "service_card secondary_service_class no_display",
            image: image2,
            data:"The Best Product can only be sold if it's placed and marketed well, let us do that for you."
        },

    ]

    const [service2, setservice2] = useState([])

    const data2 = [
        {
            text: "Ads & TVCs",
            class: "service_card secondary_service_class no_display",
            image: image3,
            data: "A picture says a thousand words, imagine the influence an Ad can have on your brand’s reach"
        },
        {
            text: "Brand Ambassadors",
            class: "service_card secondary_service_class no_display",
            image: image4,
            data: "The face, the voice your brand needs is what we match you with, trust us, the compatibility is 100% better than tinder made."

        },
        {
            text: "Event Presence",
            class: "service_card secondary_service_class no_display",
            image: image2,
            data: "Have a high valued person speak on behalf of your brand in your next event to your consumers to 10X your revenue."

        }
    ]
    useEffect(() => {

        setServices(data);
        setservice2(data2)
        return () => {

        }
    }, [])

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
            <div className="SP_cards">

                {services.map((e, i) => {
                    return <div key={i} className="SP_card">
                           
                            <div class="SP_content">
                                <div class="SP_front">
                                <h1>{e.text}</h1>
                                <img src={e.image} alt="" />
                                </div>
                                <div class="SP_back">
                                    <h1>{e.text}</h1>
                                    <p>{e.data}</p>
                                </div>
                            </div>
                        
                    
                    </div>
                })}

            </div>


            <div className="SP_cards2">


                {service2.map((e, i) => {
                    return <div key={i} className=" SP_card SP_card2">

                        <div class="SP_card2">
                            <div class="SP_content">
                                <div class="SP_front">
                                <h1>{e.text}</h1>
                                <img src={e.image} alt="" />
                                </div>
                                <div class="SP_back">
                                    <h1>{e.text}</h1>
                                    <p>{e.data}</p>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                })}

            </div>
        </div>
    )
}

export default SPOne