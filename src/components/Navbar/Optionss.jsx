import React from 'react'

const Optionss = ({ data,setSelectSeacrhTo,setSelectSeacrhFrom }) => {

    const serchOptionsfrom=(e)=>{
        console.log("serchOptionsFrom",e.target.value)
        setSelectSeacrhFrom(e.target.value)
    }

    const serchOptionsTo=(e)=>{
        console.log("serchOptionsTo",e.target.value)
        setSelectSeacrhTo(e.target.value)
    }

    return (
        <>
            {data === "Flight" && <>
                <div className='from' >
                    <label htmlFor="" className='labels'><b>From</b></label><br />
                    <select name="" id="" className='All' onChange={serchOptionsfrom}>
                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="delhi" >Delhi</option>
                        <option className='opt' value="mumbai" >Mumbai</option>
                        <option className='opt' value="kolkata" >Kolkata</option>
                        <option className='opt' value="chennai" >Chennai</option>
                        <option className='opt' value="goa" >Goa</option>
                    </select>
                </div>
                <div className='To'>
                    <label htmlFor="" className='labels'><b>To</b></label><br />
                    <select className='All' onChange={serchOptionsTo}>

                        <option className='opt' value="" disabled >Select City</option>
                        <option className='opt' value="mumbai" >Mumbai</option>
                        <option className='opt' value="bangalore" >Bangalore</option>
                        <option className='opt' value="kolkata" >Kolkata</option>
                        <option className='opt' value="chennai" >Chennai</option>
                        <option className='opt' value="goa" >Goa</option>
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