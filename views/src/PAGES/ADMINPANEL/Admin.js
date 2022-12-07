import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Admin.css'
const {REACT_APP_API_ENDPOINT} = process.env;

function Admin() {
    const navigate = useNavigate();

    const checkLogin = async () => {
        const responseGot = await fetch(`${REACT_APP_API_ENDPOINT}/isLoggedIn`, {
            method: 'GET',
            mode:"cors",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
          const login = await responseGot.json();
             if(!login){
        navigate('/login')
      }
    
      console.log(login);
    }

    const getUserData = async () => {

        const responseGot = await fetch(`${REACT_APP_API_ENDPOINT}/allUser`, {
            method: 'GET',
            mode:"cors",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
          const content = await responseGot.json();
    
          console.log(content);

    }

    useEffect(() => {
      getUserData()
        checkLogin()
      return () => {
        
      }
    }, [])
    

  return (
    <div id='admin'>

        <button onClick={getUserData}>CLICK</button>
    </div>
  )
}

export default Admin