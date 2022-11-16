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
            p1: "em csam veniam incidunt, ducimus iusto, maxime adipisci dicta quam ea, totam beatae earum illo laborum sit?Cum odit totam voluptates aliquid sequi iste tempore consequuntur amet eum exercitationem perferendis sunt esse mollitia quibusdam eius, voluptatibus, unde dicta fugit officiis in asperiores minima. Facere cupiditate veritatis iusto.",
            p2:"Lorem ationem, officiis laudantium tenetur repellendus est? Blanditiis fuga soluta dolores maiores harum, porro quas dolorem quisquam corporis excepturi sit sequi suscipit?",
            p3:"Lorem  exercitationem, officiis laudantium tenetur repellendus est? Blanditiis fuga soluta dolores maiores harum."
        },
        {
            title:"Our Mission",
            image: image2,
            p1: "em csam veniam incidunt, ducimus iusto, maxime adipisci dicta quam ea, totam beatae earum illo laborum sit?Cum odit totam voluptates aliquid sequi iste tempore consequuntur amet eum exercitationem perferendis sunt esse mollitia quibusdam eius, voluptatibus, unde dicta fugit officiis in asperiores minima. Facere cupiditate veritatis iusto.",
            p2:"Lorem ationem, officiis laudantium tenetur repellendus est? Blanditiis fuga soluta dolores maiores harum, porro quas dolorem quisquam corporis excepturi sit sequi suscipit?",
            p3:"Lorem  exercitationem, officiis laudantium tenetur repellendus est? Blanditiis fuga soluta dolores maiores harum."
        },
        {
            title:"Our Process",
            image: image3,
            p1: "em csam veniam incidunt, ducimus iusto, maxime adipisci dicta quam ea, totam beatae earum illo laborum sit?Cum odit totam voluptates aliquid sequi iste tempore consequuntur amet eum exercitationem perferendis sunt esse mollitia quibusdam eius, voluptatibus, unde dicta fugit officiis in asperiores minima. Facere cupiditate veritatis iusto.",
            p2:"Lorem ationem, officiis laudantium tenetur repellendus est? Blanditiis fuga soluta dolores maiores harum, porro quas dolorem quisquam corporis excepturi sit sequi suscipit?",
            p3:"Lorem  exercitationem, officiis laudantium tenetur repellendus est? Blanditiis fuga soluta dolores maiores harum."
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
            <p>{e.p2}</p>
            <p>{e.p3}</p>
            </div>
        </div>
       })}
       </div>
    </div>
  )
}

export default AboutSeg1