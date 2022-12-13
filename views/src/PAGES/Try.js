import React, { useEffect, useState } from 'react'
import './try.css'
import EventAndMore from '../ASSETS/Events&More.jpg'
import CelebrityMarketing from '../ASSETS/CelebrityMarketing.png'
import InfluencerMarketing from '../ASSETS/InfluencerMarketing.png'
function Try() {

    const [services, setServices] = useState([])
    let data = [
        // {
        //     text: "Social Media Strategies",
        //     class: "service_card main_service_class ",
        //     image: image2,
        //     id: "item-1",
        //     song:"song-1"
        // },
        // {
        //     text: "Campaigns",
        //     class: "service_card secondary_service_class  right_service_card",
        //     image: image2,
        //     id: "item-2",
        //     song:"song-2"
        // },
        // {
        //     text: "Celebrity Marketing",
        //     class: "service_card secondary_service_class no_display",
        //     image: image3,
        //     id: "item-3",
        //     song:"song-3"
        // },
        {
            text: "Influencer Marketing",
            class: "service_card secondary_service_class no_display",
            image: InfluencerMarketing,
            id: "item-2",
            song:"song-2"
        },
        {
            text: "Events, Ads, TVCs, & more",
            class: "service_card secondary_service_class no_display",
            image: EventAndMore,
            id: "item-3",
            song:"song-3"
        }
        // ,
        // {
        //     text: "Brand Ambassadors",
        //     class: "service_card secondary_service_class no_display",
        //     image: image6,
        //     id: "item-6",
        //     song:"song-6"
        // },
        // {
        //     text: "Event Presence",
        //     class: "service_card secondary_service_class no_display",
        //     image: image2,
        //     id: "item-7",
        //     song:"song-7"
        // }
    ]
    useEffect(() => {

        setServices(data);

        return () => {

        }
    }, [])

    return (
        <div>
            <div className="container">
                <input type="radio" name="slider" id="item-1" checked />
                {services.map((e,i)=> {
                        return  <input key={i} type="radio" name="slider" id={e.id} />
                    })}
                {/* <input type="radio" name="slider" id="item-2" /> */}
                {/* <input type="radio" name="slider" id="item-3" /> */}
               
                <div className="cards">
                <label className="card" for="item-1" id="song-1">
                        <img src={CelebrityMarketing} alt="song" />
                        {/* <h2>Celebrity Marketing</h2> */}
                </label>
                    {services.map((e,i)=> {
                        return  <label className="card" for={e.id} id={e.song}>
                        <img src={e.image} alt="song" />
                        {/* <h2>{e.text}</h2> */}
                    </label>
                    })}
                    {/* <label className="card" for="item-1" id="song-1">
                        <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
                    </label>
                    <label className="card" for="item-2" id="song-2">
                        <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
                    </label>
                    <label className="card" for="item-3" id="song-3">
                        <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
                    </label> */}
                </div>
                <div className="player">
                </div>
            </div>
        </div>
    )
}

export default Try