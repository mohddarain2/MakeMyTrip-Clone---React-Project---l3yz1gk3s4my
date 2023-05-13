import React, { useContext } from 'react';
import { DataParentContext } from '../App';
import { Link } from 'react-router-dom';
const LogOutModal = ({setModalBtn}) => {
  const Context = useContext(DataParentContext);
 
  const signOut=()=>{
    localStorage.setItem("logIn","")
    //localStorage.setItem("userName","")
   Context.setLoginDetails([])
    setModalBtn(false)
  }

  return (
    <div className='logoutClick'>
      <Link className="navlinks" to="/login"><div onClick={signOut} className="done">LOG OUT</div></Link>
    </div>
  )
}

export default LogOutModal