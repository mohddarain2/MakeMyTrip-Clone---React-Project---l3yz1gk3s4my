import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import MMT from '../../Logo/MMTLogo.png';
import Flight from '../../Logo/flight.svg';
import Hotels from '../../Logo/hotels.svg';
import Train from '../../Logo/trn.png';
import DownKey from '../../Logo/DownKey.svg';
import Download from '../../Logo/download.svg';
import LogOutModal from './LogOutModal';
import { DataParentContext } from '../App';

import { Link } from 'react-router-dom';
const Navbar = () => {
    const localcontextModal = useContext(DataParentContext)
   

    const {modalBtn,setModalBtn}=localcontextModal
    let loginCheck = localStorage.getItem("logIn")
    let userName = localStorage.getItem("userName")
    // console.log(loginCheck,"loginCheck");
    // console.log(userName,"userName.....");

    const onOff = () => {
        setModalBtn(!modalBtn)
    }
     useEffect(() => {
       console.log("modalBtn",modalBtn)
     })
    return (
        <div className='NavbarContainer'>
            <div className="logo">
                <Link to="">
                    <img src={MMT} alt="MMT-Logo" />
                </Link>
            </div>
            <Link className="navlinks" to="/"><img id="dd" src={Flight} alt="Flight-logo" />Flights</Link>
            <Link className="navlinks" to="/hotels"><img src={Hotels} alt="Hotels-logo" />Hotels</Link>
            <Link className="navlinks" to="/trains"><img src={Train} alt="Train-logo" />Trains</Link>
            <a className='navlinks' href='https://play.google.com/store/apps/details?id=com.makemytrip&%24web_only=true&_branch_match_id=1118781899257453167&_branch_referrer=H4sIAAAAAAAAAw3KSQoAIAgAwB%2Flvd9IBkm5YEL0%2B5rzjEzfFQDdF%2BvcRXB2uRnspZlAB1QKY%2FqB7OgypAe6NG0fNAAAAA%3D%3D' target='_blank'><img src={Download} alt="Train-logo" />Download App Now !</a>


            <div className='DashboardPortal'>
                {loginCheck ?  <><button className='btn-btn' onClick={() => onOff()}>
                    {"Hi " + userName  } <img src={DownKey} alt="DownKey"  className="DownKey"/>
                </button>
                    {
                        modalBtn && <LogOutModal setModalBtn={setModalBtn} />

                    } 
                    </> : <Link className="navlinks" to="/login">Log In</Link>}

            </div>
        </div>
    )
}

export default Navbar