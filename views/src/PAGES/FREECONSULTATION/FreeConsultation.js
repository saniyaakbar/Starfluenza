import React, { useEffect, useState } from 'react'
import './FreeConsultation.css'
import Nav from '../../NAV/Nav'
import Footer from '../Footer'
import { useNavigate } from "react-router-dom";
const { REACT_APP_ENDPOINT } = process.env;


function FreeConsultation() {
  const navigate = useNavigate();
  

  const [userData, setuserData] = useState(    
    { message : ""}
  );

  const setuser = (e) => {
    const data = {...userData, [e.target.name] : e.target.value}
    setuserData(data)
    // console.log(userData)
  }

 const userDataSubmit = async (e) => {
    e.preventDefault()
    
    
      const rawResponse = await fetch(`${REACT_APP_ENDPOINT}/userData`, {
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

          <input required onChange={setuser} value={userData.name} placeholder='Name' type="text" name='name' />
          <input required onChange={setuser} value={userData.company} placeholder='Company' type="text" name="company"/>
          <input required onChange={setuser} value={userData.industry} placeholder='Industry' type="text" name="industry"/>
          <input required onChange={setuser} value={userData.designation} placeholder='Designation' type="text" name="designation"/>

          </div>

          <div className="extraInfo">

          <input required onChange={setuser} value={userData.email} placeholder='Email' type="email" name="email"/>
          <input required onChange={setuser} value={userData.phone} placeholder='Phone Number' type="tel" name="phone"/>
          <input required onChange={setuser} value={userData.location} placeholder='Location' type="text" name="location"/>
          <input onChange={setuser} value={userData.message} placeholder='Message (Optional)' type="text" name="message"/>

          </div>

          <button>Submit</button>
         
        </form>

        </div>
        
      
    </div>
  )
}

export default FreeConsultation