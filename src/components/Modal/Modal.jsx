import React,{useState} from 'react'
import ReactDom from 'react-dom';
import './Modal.css'
import Payment from "../../Logo/payment.png"
const Modal = ({setIsOpen}) => {
    const [success, setSuccess] = useState(false);
    return (
        <>
            <div className='modalCss'>
                <div className='MMTmodal'>
                  {success  &&  <h3 style={{textAlign:"center",marginTop:"10px",}}> <img src={Payment} alt="Success" style={{width:"30px",height:"30px",borderRadius:"20px"}} /> Payment Successfull</h3>}
                        <div><h3 style={{textAlign:"center"}}>Fare Summary </h3></div>
                    <div className='Fare'>
                        <div className='baseFare'>
                            <div ><b>Base Fare </b></div>
                            <div id='numbers'>&#8377;5000</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"20px"}}><b>Fee & Surcharges</b></div>
                            <div style={{marginRight:"20px"}}>&#8377;740</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"5px"}}><b>Total Amount</b></div>
                            <div id='numbers'>&#8377;5000</div>
                        </div>
                    </div>
                    <div><h3 style={{textAlign:"center"}}>Payment Method </h3></div>
                    <div className='PaymentInput'>
                        <input type="text" placeholder='Name on Card' />
                    </div>
                    <div className='PaymentInput'>
                        <input type="number" placeholder='Card Number' />
                    </div>
                    <div className='PaymentInput'>
                        <input type="date" placeholder='Expiry Date' />
                    </div>
                    <div className='PaymentInput'>
                        <input type="number" placeholder='CVV' />
                    </div>
                    <div className='btnPay'>
                        <button style={{backgroundColor:"rgb(220,53,69)"}} onClick={()=>(setIsOpen(false))}>Cancel</button>
                        <button onClick={()=>{setSuccess(true)}}>Pay</button>
                    </div>

                </div>
            </div>
        </>

    )

}

export default Modal