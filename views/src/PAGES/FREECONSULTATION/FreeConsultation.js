import React from 'react'
import './FreeConsultation.css'
import Nav from '../../NAV/Nav'
function FreeConsultation() {
  
  const contactForm = (e) => {
          e.preventDefault();
  }

  return (
    <div className='freeConsultation'>
        <Nav/>
        <div className="consultationBox">
        <h1>Can't decide what to do next?</h1>
        <p>Drop us your details and we'll get back to you in less than 24 hours.</p>

        <form onSubmit={(e)=>contactForm(e)}>
          <div className="personalInfo">

          <input placeholder='Name' type="text" name='name' />
          <input placeholder='Company' type="text" name="company"/>
          <input placeholder='Industry' type="text" name="Industry"/>
          <input placeholder='Designation' type="text" name="Designation"/>

          </div>

          <div className="extraInfo">

          <input placeholder='Email' type="email" name="Email"/>
          <input placeholder='Phone Number' type="Number" name="PhoneNumber"/>
          <input placeholder='Location' type="text" name="Location"/>
          <input placeholder='Message (Optional)' type="text" name="Message"/>

          </div>

          <button>Submit</button>
         
        </form>

        </div>
        
    </div>
  )
}

export default FreeConsultation