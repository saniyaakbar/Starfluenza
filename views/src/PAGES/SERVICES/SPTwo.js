import React, { useEffect, useState } from 'react'
import '../Services.css'
import image2 from '../../ASSETS/demoImage.avif'
import image3 from '../../ASSETS/demoImage2.avif'
import image4 from '../../ASSETS/demoImage3.avif'
import socialMediaStrategies from '../../ASSETS/Artboard 1.png'
import Campaigns from '../../ASSETS/Artboard 2.png'
import CelebrityAndVideo from '../../ASSETS/Artboard 3.png'
import BrandAmbassador from '../../ASSETS/Artboard 5.png'
import AdsAndTv from '../../ASSETS/Artboard 6.png'
import EventPresence from '../../ASSETS/Artboard 7.png'
import catelogue from '../../ASSETS/CatelogueShoot.png'

function SPTwo() {
    
    const [services, setServices] = useState ([])

    let data = [
        {
            // text: "Social Media Strategies",
            class: "service_card main_service_class ",
            image: socialMediaStrategies,
            data:"Get Customised strategies to suit your brand needs with the right celebrity touch to spark fire."
        },
        {
            // text: "Campaigns",
            class: "service_card secondary_service_class  right_service_card",
            image: Campaigns,
            data:"From digital to on-ground, these personalised campaigns are all your brands need to become the talk of every town. "
        },
        {
            // text: "Celebrity Video Recommendations",
            class: "service_card secondary_service_class no_display",
            image: CelebrityAndVideo,
            data:"Word of mouth works like magic, so how about some words of appreciation from your favourite celebrity for your brand? "
        },
        {
            // text: "Catalogue Shoots",
            class: "service_card secondary_service_class no_display",
            image: catelogue,
            data:"The Best Product can only be sold if it's placed and marketed well, let us do that for you."
        },

    ]

    const [service2, setservice2] = useState([])

    const data2 = [
        
        {
            // text: "Brand Ambassadors",
            class: "service_card secondary_service_class no_display",
            image: BrandAmbassador,
            data: "The face, the voice your brand needs is what we match you with, trust us, the compatibility is 100% better than tinder made."

        },
        {
            // text: "Ads & TVCs",
            class: "service_card secondary_service_class no_display",
            image: AdsAndTv,
            data: "A picture says a thousand words, imagine the influence an Ad can have on your brand’s reach"
        },
        {
            // text: "Event Presence",
            class: "service_card secondary_service_class no_display",
            image: EventPresence,
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
        <div id='SPTwo'>

        <h1 id='step_1'>Step 1:</h1>

            <h3 id='choose_step_1'>Choose a Service</h3>



            <div className="SP_cards">

                {services.map((e, i) => {
                    return <div key={i} className="SP_card">

                        <div class="SP_content">
                            <div class="SP_front">
                                <h1>{e.text}</h1>
                                <div className="SP_overlay">
                                <img style={i === 2? {"marginLeft" : "-1.5%"} : {"marginLeft" : "0%"}} src={e.image} alt="" />
                                </div>
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

export default SPTwo