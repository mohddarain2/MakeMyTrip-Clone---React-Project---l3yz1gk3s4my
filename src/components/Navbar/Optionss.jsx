import React from 'react'

const Optionss = ({ data }) => {
    return (
        <>
            {data === "Flight" && <>
                <div className='from' >
                    <label htmlFor="" className='labels'><b>From</b></label><br />
                    <select name="" id="" className='All' >
                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >Delhi</option>
                        <option className='opt' value="" >Mumbai</option>
                        <option className='opt' value="" >Kolkata</option>
                        <option className='opt' value="" >Chennai</option>
                        <option className='opt' value="" >Goa</option>
                    </select>
                </div>
                <div className='To'>
                    <label htmlFor="" className='labels'><b>To</b></label><br />
                    <select className='All'>

                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >Mumbai</option>
                        <option className='opt' value="" >Bangalore</option>
                        <option className='opt' value="" >Kolkata</option>
                        <option className='opt' value="" >Chennai</option>
                        <option className='opt' value="" >Goa</option>
                    </select>
                </div>
                <div className='Departure '>
                    <label htmlFor="" className='labels'><b>Departure</b></label><br />
                    <input type="date" className='All' />
                </div>
                <div className='Return_Date '>
                    <label htmlFor="" className='labels'><b>Return</b></label><br />
                    <input type="date" className='All' />
                </div>
            </>
            }


            {data === "Hotel" && <>
                <div className='from' >
                    <label htmlFor="" className='labels'><b>LOCATION</b></label><br />
                    <select name="" id="" className='All' >
                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >Kolkata</option>
                        <option className='opt' value="" >Mumbai</option>
                        <option className='opt' value="" >Delhi</option>
                        <option className='opt' value="" >Chennai</option>
                        <option className='opt' value="" >Goa</option>
                    </select>
                </div>
                <div className='To'>
                    <label htmlFor="" className='labels'><b>CHECH-IN</b></label><br />
                    <input type="date" className='All' />
                </div>
                <div className='Departure '>
                    <label htmlFor="" className='labels'><b>CHECK-OUT</b></label><br />
                    <input type="date" className='All' />
                </div>
                <div className='Return_Date '>
                    <label htmlFor="" className='labels'><b>CLASS</b></label><br />
                    <select className='All'>

                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >A+</option>
                        <option className='opt' value="" >A</option>
                        <option className='opt' value="" >B</option>
                        <option className='opt' value="" >C</option>    
                    </select>
                </div>
            </>
            }

            {data === "Train" && <>
                <div className='from' >
                    <label htmlFor="" className='labels'><b>From</b></label><br />
                    <select name="" id="" className='All' >
                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >Delhi</option>
                        <option className='opt' value="" >Mumbai</option>
                        <option className='opt' value="" >Kolkata</option>
                        <option className='opt' value="" >Chennai</option>
                        <option className='opt' value="" >Goa</option>
                    </select>
                </div>
                <div className='To'>
                    <label htmlFor="" className='labels'><b>To</b></label><br />
                    <select className='All'>

                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >Mumbai</option>
                        <option className='opt' value="" >Bangalore</option>
                        <option className='opt' value="" >Kolkata</option>
                        <option className='opt' value="" >Chennai</option>
                        <option className='opt' value="" >Goa</option>
                    </select>
                </div>
                <div className='Departure '>
                    <label htmlFor="" className='labels'><b>TRAVEL DATE</b></label><br />
                    <input type="date" className='All' />
                </div>
                <div className='Return_Date '>
                    <label htmlFor="" className='labels'><b>Return</b></label><br />
                    <select className='All'>

                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="" >A+</option>
                        <option className='opt' value="" >A</option>
                        <option className='opt' value="" >B</option>
                        <option className='opt' value="" >C</option>    
                    </select>
                </div>
            </>
            }
        </>
    )
}

export default Optionss