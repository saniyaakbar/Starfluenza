import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const {REACT_APP_API_ENDPOINT} = process.env;

function Login() {

    const navigate = useNavigate();
  

    const [userData, setuserData] = useState(    
      { }
    );
  
    const setuser = (e) => {
      const data = {...userData, [e.target.name] : e.target.value}
      setuserData(data)
      // console.log(userData)
    }


    const loginFun = async(e) => {
        e.preventDefault();
        console.log(userData)

        const responseGot = await fetch(`${REACT_APP_API_ENDPOINT}/login`, {
            method: 'POST',
            mode:"cors",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
          });
          const content = await responseGot.json();
    
      if(content){
        navigate('/adminPanel')
      }
      else{
        console.log(content)
      }
    }

  return (

    <div className='login'>
        <form onSubmit={(e) => loginFun(e)}>
            <input onChange={setuser} type="text" name='username' placeholder='Username'/>
            <input onChange={setuser} type="password" name="password"/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login