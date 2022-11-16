import React, { Fragment, useState } from 'react'
import './Nav.css'
import logo from '../ASSETS/logo.png'
import { NavLink, Link } from "react-router-dom"


function Nav() {



    var pages = [
        { page: "Home", link: '/' },
        { page: "Services", link: '/Services' },
        { page: "About Us", link: '/About' },
        { page: "Free Consultation", link: '/FreeConsultation' },
    ];



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

                            <NavLink style={({ isActive }) => isActive ? { color: 'rgb(121, 239, 255)' } : {}} to={p.link} className="links" end = {p.page === "Home" && "true"}>{p.page}</NavLink>

                            <div className="line"></div>
                        </div>
                        )}

                    </div>

            </div>

        </Fragment>
    )
}

export default Nav