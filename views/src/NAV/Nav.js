import React, { Fragment, useEffect, useRef, useState } from 'react'
import './Nav.css'
import logo from '../ASSETS/LOGO/website logo.png'
import { NavLink, Link } from "react-router-dom"
import menu from '../ASSETS/LOGOS/menu.png'


function Nav() {

    const dropelem = useRef(null)


    const [open, setopen] = useState(false)

    const handlemenubutton = () => {
        setopen(!open);
        // console.log(dropelem);
        if(open){
            dropelem.current.style.display = "none"

        }
        else{
        dropelem.current.style.display = "initial"

        }
        console.log(open)
    }

    var pages = [
        { page: "Home", link: '/' },
        { page: "Services", link: '/Services' },
        { page: "About Us", link: '/About' },
        { page: "Free Consultation", link: '/FreeConsultation' },
    ];

    // useEffect(() => {
    //     document.addEventListener("mousedown", this.handleClickOutside);

    //   return () => {
    //     document.removeEventListener("mousedown", this.handleClickOutside);
    //   }
    // }, [])



    return (
        <Fragment>

            <div className='nav'>
                <div id="left">
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>

                </div>
                <div id="allLinks">

                    {pages.map((p, i) => <div key={i} className='links '  >

                        <NavLink style={({ isActive }) => isActive ? { color: 'rgb(121, 239, 255)' } : {}} to={p.link} className="links" end={p.page === "Home" && "true"}>{p.page}</NavLink>

                        <div className="line"></div>
                    </div>
                    )}

                </div>
                <div id="menubtn"><button onClick={handlemenubutton}><img id='menu_img' src={menu} alt="" /></button></div>

                <div ref={dropelem} className="allLinks_mobile">
                <div id="menubtn"><button onClick={handlemenubutton}><img id='menu_img' src={menu} alt="" /></button></div>

                    <img src={logo} alt="" />
                    <div id="allLinks_mob">

                        {pages.map((p, i) => <div ref={dropelem} key={i} className='links_mob'  >
                            <div className="dot"></div>
                            <NavLink style={({ isActive }) => isActive ? { color: 'rgb(121, 239, 255)', } : {}} to={p.link} className="link_mob" end={p.page === "Home" && "true"}>{p.page}</NavLink>

                            <div className="line"></div>
                        </div>
                        )}

                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Nav