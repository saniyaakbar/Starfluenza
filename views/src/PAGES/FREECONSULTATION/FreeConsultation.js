import React, { useEffect, useState } from 'react'
import './FreeConsultation.css'
import Nav from '../../NAV/Nav'
import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;

function FreeConsultation() {
  const navigate = useNavigate();
  

  const [userData, setuserData] = useState(    
    { }
  );

  const setuser = (e) => {
    const data = {...userData, [e.target.name] : e.target.value}
    setuserData(data)
    // console.log(userData)
  }

 const userDataSubmit = async (e) => {
    e.preventDefault()
    
    
      const rawResponse = await fetch(`${REACT_APP_API_ENDPOINT}/userData`, {
        method: 'POST',
        mode:"cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(userData)
      });
      const content = await rawResponse.json();
    
      // console.log(content);
    
      navigate('/FormSubmitted')
    
  }

  return (
    <div className='freeConsultation'>
        <Nav/>
        <div className="consultationBox">
        <h1>Can't decide what to do next?</h1>
        <p>Drop us your details and we'll get back to you in less than 24 hours.</p>

        <form onSubmit={(e)=>userDataSubmit(e)}>
          <div className="personalInfo">

          <input onChange={setuser} placeholder='Name' type="text" name='name' />
          <input onChange={setuser} placeholder='Company' type="text" name="company"/>
          <input onChange={setuser} placeholder='Industry' type="text" name="industry"/>
          <input onChange={setuser} placeholder='Designation' type="text" name="designation"/>

          </div>

          <div className="extraInfo">

          <input onChange={setuser} placeholder='Email' type="email" name="email"/>
          <input onChange={setuser} placeholder='Phone Number' type="Number" name="phone"/>
          <input onChange={setuser} placeholder='Location' type="text" name="location"/>
          <input onChange={setuser} placeholder='Message (Optional)' type="text" name="message"/>

          </div>

          <button>Submit</button>
         
        </form>

        </div>
        
    </div>
  )
}

export default FreeConsultation