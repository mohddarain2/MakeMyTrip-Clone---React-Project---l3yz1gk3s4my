import React,{useState} from 'react';
import './SearchContent.css';
import Optionss from './Optionss.jsx';



const SearchContent = ({data}) => {
  const [selectSearchTo, setSelectSeacrhTo ] = useState()
  const [selectSearchFrom, setSelectSeacrhFrom ] = useState()

  const resutSearch=()=>{
    
    console.log("resutSearch")

  }
  
  return (
    <div className="SearchContentContainer">
    {data==="Flight" &&<span className='BIDF'>Book International and Domestic Flights</span>}
    {data==="Hotel" &&<span className='BIDF'>Book International and Domestic Hotel</span>}
    {data==="Train" &&<span className='BIDF'>Book International and Domestic Train</span>}
        <div className='SearchContentSmall_container'>
        <Optionss data={data} setSelectSeacrhTo={setSelectSeacrhTo} setSelectSeacrhFrom={setSelectSeacrhFrom} />
        </div>
        <div className='btnSearch'>
            <button onClick={resutSearch} >Search</button>
        </div>
    </div>
  )
}

export default SearchContent