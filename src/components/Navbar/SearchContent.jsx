import React from 'react';
import './SearchContent.css';
import Optionss from './Optionss.jsx';


const SearchContent = ({data}) => {
  console.log(data)
  return (
    <div className="SearchContentContainer">
    {data==="Flight" &&<span className='BIDF'>Book International and Domestic Flights</span>}
    {data==="Hotel" &&<span className='BIDF'>Book International and Domestic Hotel</span>}
    {data==="Train" &&<span className='BIDF'>Book International and Domestic Train</span>}
        <div className='SearchContentSmall_container'>
        <Optionss data={data}/>
        </div>
        <div className='btnSearch'>
            <button>Search</button>
        </div>
    </div>
  )
}

export default SearchContent