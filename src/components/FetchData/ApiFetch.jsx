import React, { useEffect, useState } from 'react';
import TakeOFF from '../../Logo/flightColor.jpg';
import Modal from '../Modal/Modal';
import './ApiFetch.css';
import SearchContent from '../Navbar/SearchContent';
import { ColorRing } from 'react-loader-spinner';

const ApiFetch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const popUp = (index) => {
        let list = [...data]
        list[index].isAnkur = !list[index].isAnkur
        setData(list)
       
    }

    const getApi = async () => {
        setLoader(true)

        const response = await fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights");
        const data = await response.json();


        setTimeout(() => {
            data.map((item) => [
                item.isAnkur = false
            ])
            setData(data);
            setLoader(false)

        }, 2000)

    }
    useEffect(() => {

        getApi();
    }, []);
    return (
        <div>
            <SearchContent data="Flight" />
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
                                <span>AirLine:</span>  <p className="font">{item.airlineName}</p>
                            </div>
                            <div className="Departure">
                                <span>DEPARTURE:</span>  <p>{item.departure.departureTime}</p>
                                <span>RETURN:</span>  <p>{item.return.returnTime}</p>
                                <img src={TakeOFF} style={{ width: "50px" }} alt="TakeOFF" />

                            </div>
                            <div className="price">
                                <span>Price:</span><p id="rupees"><b> &#8377; {item.price}</b></p>
                                <span>Via:</span>  <p>{item.via}</p>
                                <span>Duration:</span>  <p>{item.duration}</p>
                            </div>
                            <div className="BookBtn">
                                <button onClick={() => popUp(index)}>BOOK NOW</button>
                                {
                                     item.isAnkur && <Modal setData={setData} index={index} data={data} modelData={item}  fakeString="flight"/>
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