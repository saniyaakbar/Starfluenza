import React, { useEffect, useState } from 'react'
import image1 from '../../ASSETS/demoImage2.avif'
import image2 from '../../ASSETS/demoImage3.avif'
import image3 from '../../ASSETS/demoImage4.avif'


function AboutSeg1() {

    const [segment, setsegment] = useState([])

    const data = [
        {
            title:"Our Vision",
            image: image1,
            p1: "Starfluenza aims at helping Brands become the real Stars of their Niche with the most known faces sharing synergy. It is in true honesty that Starfluenza, unlike other Celebrity Platforms, wants to build a cultural mix of different genres of celebrities, niches of brands and show their combined power to take on the digital world."
          },
        {
            title:"Our Mission",
            image: image2,
            p1: "300M+ Brands, all striving to be the one that is remembered and our mission is to help them to become the one by connecting them to the right way to tell their story to the world, through the right face and voice. The digital age has made it easier for people to reach numbers, we aim to help you reach the hearts of your audience."
           },
        {
            title:"Our Process",
            image: image3,
            p1: "For centuries we have seen businesses grow based on names, concepts and art but now is the time when we combine them together and give it a face that shows the world, “What your Brand really is?” The Story of your Brand is what is going to make it the next big thing and the right Celebrity will make it known to the world as a STAR BRAND! "
           }
    ]

    useEffect(() => {
      
        setsegment(data);

      return () => {

      }
    }, [])
    

  return (
    <div className='AboutSeg1'>
       <h1>About Us</h1>
       <h4>Adding Stars To Your Brand</h4>
       <div className="allAboutSeg">
       {segment.map((e,i) => {
        return <div key={i} className={ i%2 === 0 ? "eachSegment" : "eachSegment segEven"}>
           <img src={e.image} className="segImage" alt="" />
            <div className="aboutSegText">
            <h2>{e.title}</h2>
            <p>{e.p1}</p>
            
            </div>
        </div>
       })}
       </div>
    </div>
  )
}

export default AboutSeg1