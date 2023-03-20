import React from 'react';
import Twitter from '../../Logo/twitter.png';
import Facebook from '../../Logo/facebook.png'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='FooterAll'>
                <div className='iconFooter'>
                    <div className='img'>
                        <img src={Twitter} alt="twitter" />
                        <img src={Facebook} alt="Facebook" />
                    </div>
                    <div className='copyRight'>&#169;<span> 2023 MAKEMYTRIP PVT . LTD .</span>
                        <p>Country <b className='USA'>India USA UAE </b></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer