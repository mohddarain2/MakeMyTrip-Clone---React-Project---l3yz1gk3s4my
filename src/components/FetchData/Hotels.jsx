import React, { useEffect, useState } from 'react';
import Book from '../../Logo/BookHotels.png';
import { ColorRing } from 'react-loader-spinner';
import Modal from '../Modal/Modal';
import SearchContent from '../Navbar/SearchContent';
import { useNavigate } from 'react-router-dom';
import './ApiFetch.css';


const Hotels = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const navegate = useNavigate();
    
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
        //setModelData(item)
        // console.log("pops",item)
    }
    const getApi = async () => {
        setLoader(true)
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels");
        const data = await response.json();
        setTimeout(() => {
         data.map((item)=>[
            item.isDarain=false
         ])
            setData(data);
            setLoader(false)
        },300)   
    }
    useEffect(() => {
        getApi();
    }, []);
    return (
        <>
            <div>
                <SearchContent data="Hotel"/>
                {loader ? <div style={{ marginLeft: "590px" }}><ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                /></div> 
                :
                    data.map((item, index) => (
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
                                    <img src={Book} style={{ width: "40px" }} alt="Hotel" />
                                </div>
                                <div className="price">
                                    <span>Price:</span><p id="rupees"><b> &#8377; {item.price_per_night} Per night</b></p>
                                    <span>Room</span>  <p>{item.room_type}</p>
                                    <span>Guest</span>  <p>{item.guests}</p>
                                </div>
                                <div className="BookBtn">   
                                    <button onClick={()=>popUp(index)}>BOOK NOW</button>
                                    {
                                     item.isDarain && <Modal setData={setData} index={index} data={data} modelData={item}  fakeString="hotel"/>
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