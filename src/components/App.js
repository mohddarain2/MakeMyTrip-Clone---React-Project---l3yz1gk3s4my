import React, { useState } from 'react';
import '../styles/App.css';
import ApiFetch from './FetchData/ApiFetch';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar.jsx';
import SearchContent from './Navbar/SearchContent.jsx';
import TrainsApi from './FetchData/TrainsApi';
import Hotels from './FetchData/Hotels.jsx';
import NotFound from './NotFound';
import Login from './LOGIN/Login';
import SignUp from './SignUP/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const DataParentContext = React.createContext();

const App = () => {
  const [LoginDetails, setLoginDetails] = useState([])
  // 
  const [modalBtn, setModalBtn] = useState(false)
  return (
    <div onBlur={()=>{setModalBtn(false)}}>
      <BrowserRouter>
        <DataParentContext.Provider value={{ LoginDetails, setLoginDetails,modalBtn ,setModalBtn}} >
          <Navbar />
          
          <Routes>
            <Route path='/login' element={<Login setLoginDetails={setLoginDetails} />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/trains' element={<TrainsApi />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/' element={<ApiFetch />} />
          </Routes>
          <Footer />
        </DataParentContext.Provider>
      </BrowserRouter>
    </div>
  )
}


export default App;
