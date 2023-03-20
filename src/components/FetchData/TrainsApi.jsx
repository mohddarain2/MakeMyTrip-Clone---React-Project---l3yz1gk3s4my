import React, { useEffect, useState } from 'react';
import trn from '../../Logo/trn.png';
import './ApiFetch.css';
import Modal from '../Modal/Modal';
import SearchContent from '../Navbar/SearchContent';

const TrainsApi = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const popUp = ()=>{
        console.log("Hotels")
        setIsOpen(true)
    }

    const getApi2 = async () => {
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains");
        const data = await response.json();
        setData(data);
        console.log("inner", data);
    }
    useEffect(() => {
        // console.log("data", data);
        getApi2();
    }, []);
    return (
        <div>
        <SearchContent data="Train"/>
            {data.map((item, index) => (
                <div key={index} className="ApiContentOuter">
                    <div className='ApiContentInner'>
                        <div className="From">
                            <span>FROM:</span>  <p className="font">{item.from}</p>
                            <span> TO:</span>  <p className="font">{item.to}</p>

                        </div>
                        <div className="Departure">
                            <span>DEPARTURE:</span> <b><p>{item.departure.departureTime} | {item.departure.departureTime}</p></b> 
                            <span>TRAIN NUMBER:</span><b><p>{item.train_number}</p></b> 
                            <img src={trn} style={{width:"40px"}} alt="TakeOFF" />

                        </div>
                        <div className="price">
                            <span>Price:</span><p id="rupees"><b> &#8377; {item.price}</b></p>
                            <span>KILOMETERS</span>  <p><b>{item.kilometers} Km</b></p>
                            <span>Duration:</span> <b><p>{item.duration}</p></b> 
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
export default TrainsApi