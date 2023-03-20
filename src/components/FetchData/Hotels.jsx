import React, { useEffect, useState } from 'react';
import Book from '../../Logo/BookHotels.png';
// import Train from '../../Logo/train.svg';
import Modal from '../Modal/Modal';
import SearchContent from '../Navbar/SearchContent';

import './ApiFetch.css';
const Hotels = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    
    const popUp = ()=>{
        console.log("Hotels")
        setIsOpen(true)
    }

    const getApi = async () => {
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels");
        const data = await response.json();
        setData(data);
        // console.log("inner", data);
    }
    useEffect(() => {
        // console.log("data", data);
        getApi();
    }, []);
    return (
        <>
        
        <div>
        <SearchContent data="Hotel"/>
            {data.map((item, index) => (
                <div key={index} className="ApiContentOuter">
                    <div className='ApiContentInner'>
                        <div className="From">
                            <span>HOTEL:</span>  <p className="font">{item.hotel_name}</p>
                            <span> CITY</span>  <p className="font">{item.city}</p>
                            <span>RATING</span>  <p className="font">{item.rating} / 10</p>
                        </div>
                        <div className="Departure">
                            <span>Check-IN:</span>  <p>{item.check_in}</p>
                            <span>CHECK-OUT:</span>  <p>{item.check_in}</p>
                            <img src={Book} style={{width:"40px"}} alt="Hotel" />
                        </div>
                        <div className="price">
                            <span>Price:</span><p id="rupees"><b> &#8377; {item.price_per_night} Per night</b></p>
                            <span>Room</span>  <p>{item.room_type}</p>
                            <span>Guest</span>  <p>{item.guests}</p>
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
        </>
    )
}
export default Hotels