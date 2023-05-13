import React, { useEffect, useState } from 'react';
import trn from '../../Logo/trn.png';
import './ApiFetch.css';
import Modal from '../Modal/Modal';
import SearchContent from '../Navbar/SearchContent';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const TrainsApi = () => {

    const navegate = useNavigate();
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loader, setLoader] = useState(false);

    const popUp = (index) => {


        let loginCheck = localStorage.getItem("logIn")
        if (!loginCheck) {
            alert("Please Login ");
            navegate("/login")
        } else {

            let list = [...data]
            list[index].isDarain = !list[index].isDarain
            setData(list)
        }

    }
    const getApi2 = async () => {
        setLoader(true)
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains");
        const data = await response.json();
        setTimeout(() => {
            setData(data);
            setLoader(false)
        }, 300)
    }
    useEffect(() => {
        getApi2();
    }, []);
    return (
        <div>
            <SearchContent data="Train" />
            {loader ? <div style={{ marginLeft: "590px" }}><ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            /></div> :
                data.map((item, index) => (
                    <div key={index} className="ApiContentOuter">
                        <div className='ApiContentInner'>
                            <div className="From">
                                <span>FROM:</span>  <p className="font">{item.from}</p>
                                <span> TO:</span>  <p className="font">{item.to}</p>

                            </div>
                            <div className="Departure">
                                <span>DEPARTURE:</span> <b><p>{item.departure.departureTime} | {item.departure.departureTime}</p></b>
                                <span>TRAIN NUMBER:</span><b><p>{item.train_number}</p></b>
                                <img src={trn} style={{ width: "40px" }} alt="TakeOFF" />
                            </div>
                            <div className="price">
                                <span>Price:</span><p id="rupees"><b> &#8377; {item.price}</b></p>
                                <span>KILOMETERS</span>  <p><b>{item.kilometers} Km</b></p>
                                <span>Duration:</span> <b><p>{item.duration}</p></b>
                            </div>
                            <div className="BookBtn">
                                <button onClick={() => popUp(index)}>BOOK NOW</button>
                                {
                                    item.isDarain && <Modal setData={setData} index={index} data={data} modelData={item} fakeString="train" />
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