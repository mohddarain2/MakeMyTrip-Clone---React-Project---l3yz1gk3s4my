import React, { useEffect, useState } from 'react';
import TakeOFF from '../../Logo/flightColor.jpg';
import Modal from '../Modal/Modal';
import './ApiFetch.css';
import SearchContent from '../Navbar/SearchContent';
const ApiFetch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    
    const popUp = ()=>{
        console.log("Mod")
        setIsOpen(true)
    }

    const getApi = async () => {
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights");
        const data = await response.json();
        setData(data);
        // console.log("inner", data);
    }
    useEffect(() => {
        // console.log("data", data);
        getApi();
    }, []);
    return (
        <div>
       
        <SearchContent data="Flight" />
            {data.map((item, index) => (
                <div key={index} className="ApiContentOuter">
                    <div className='ApiContentInner'>
                        <div className="From">
                            <span>FROM:</span>  <p className="font">{item.from}</p>
                            <span> TO:</span>  <p className="font">{item.to}</p>
                            <span>AirLine:</span>  <p className="font">{item.airlineName}</p>
                        </div>
                        <div className="Departure">
                            <span>DEPARTURE:</span>  <p>{item.departure.departureTime}</p>
                            <span>RETURN:</span>  <p>{item.return.returnTime}</p>
                            <img src={TakeOFF} style={{width:"50px"}} alt="TakeOFF" />

                        </div>
                        <div className="price">
                            <span>Price:</span><p id="rupees"><b> &#8377; {item.price}</b></p>
                            <span>Via:</span>  <p>{item.via}</p>
                            <span>Duration:</span>  <p>{item.duration}</p>
                        </div>
                        <div className="BookBtn">
                            <button onClick={popUp}>BOOK NOW</button>
                            {
                                isOpen && <Modal setIsOpen={setIsOpen}/>
                                
                            }
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
export default ApiFetch