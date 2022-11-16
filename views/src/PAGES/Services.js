import React, { useEffect, useRef, useState } from 'react'
import './Services.css'
import image1 from '../ASSETS/demo.png'
import image2 from '../ASSETS/demoImage.avif'
import image3 from '../ASSETS/demoImage2.avif'
import image4 from '../ASSETS/demoImage3.avif'
import Try from './Try'

function Services() {

    const leftbtn = useRef(null)
    const rightbtn = useRef(null)

    const [services, setServices] = useState([])
    let data = [
        {
            text: "Social Media Strategies",
            class: "service_card main_service_class ",
            image: image2
        },
        {
            text: "Campaigns",
            class: "service_card secondary_service_class  right_service_card",
            image: image3
        },
        {
            text: "Celebrity Video Recommendations",
            class: "service_card secondary_service_class no_display",
            image: image4
        },
        {
            text: "Catalogue Shoots",
            class: "service_card secondary_service_class no_display",
            image: image2
        },
        {
            text: "Ads & TVCs",
            class: "service_card secondary_service_class no_display",
            image: image3
        },
        {
            text: "Brand Ambassadors",
            class: "service_card secondary_service_class no_display",
            image: image4
        },
        {
            text: "Event Presence",
            class: "service_card secondary_service_class no_display",
            image: image2
        }
    ]
    useEffect(() => {

        setServices(data);

        return () => {

        }
    }, [])

    const [index, setindex] = useState(0)



    const changeIndex = (currentIndex, buttonType) => {

        data = { ...services };
        let newIndex = currentIndex;
        if (buttonType === "right") {
            leftbtn.current.style.display = "flex"
            data[index].class = "service_card secondary_service_class left_service_card"
            if (currentIndex < services.length - 1) {

                newIndex = newIndex + 1;
                setindex(newIndex)
            }
            else {
                
                console.log("else chala")
                newIndex = 0;
                setindex(0)
            }
            if(newIndex + 1 > services.length -1){
                rightbtn.current.style.display = "none"
            } 
            data[newIndex].class = "service_card main_service_class"
            data[newIndex + 1].class = "service_card secondary_service_class right_service_card"
            if (newIndex - 1 > 0) {
                data[newIndex - 2].class = "service_card no_display"
            }
        }
        else {
            
            rightbtn.current.style.display = "flex"
            data[index].class = "service_card secondary_service_class right_service_card"
            if (currentIndex > 0) {
                newIndex = newIndex - 1;
                setindex(newIndex)
            }
            else {
               
                console.log("else chala")
                newIndex = services.length - 1;
                setindex(services.length - 1)
            }
            if(newIndex <= 0){
                console.log("CHALAAAAA")
                leftbtn.current.style.display = "none"
            } 
            data[newIndex].class = "service_card main_service_class"

            data[newIndex - 1].class = "service_card secondary_service_class left_service_card"
            if (newIndex + 1 < services.length) {
                data[newIndex + 2].class = "service_card no_display"
            }
            
           

        }

        // setServices(...data);
    }

    return (
        <div className='services'>

                <Try/>
            <h1>Smart Ideas, Subtle Influence & Star-Studded Results</h1>

            {/* <div className="service_cards">
                <button ref={leftbtn} onClick={() => changeIndex(index, "left")} className='left_service_btn no_display'>Prev</button>
                <button ref={rightbtn} onClick={() => changeIndex(index, "right")} className='right_service_btn'>Next </button>
                {services.map((e, i) => {
                    return <div  key={i} className={e.class}>
                        <img onClick={() => changeIndex(index, "left")} className="service_card_image" src={e.image} alt="" />
                        <h3>{e.text}</h3>
                    </div>
                })}

            </div> */}



        </div>
    )
}

export default Services