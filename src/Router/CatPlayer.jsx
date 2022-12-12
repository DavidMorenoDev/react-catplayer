import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";/* import Footer from '../components/Footer/Footer' */



import Homepage from '../pages/Homepage'
import SearchPage from '../pages/SearchPage'
import LikeSongs from './../pages/LikeSongs'
import AccountPage from './../pages/AccountPage'
import TracksPage from '../pages/TracksPage';
import LoginPage from '../pages/LoginPage';




const CatPlayer = () => {
  return (
   <>
   <Router>
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/HomePage'   element={<Homepage/>}/>
        <Route path='/SearchPage' element={<SearchPage/>}/>
        <Route path="/LikeSongs" element={<LikeSongs/>}/>
        <Route path='/AccountPage' element={<AccountPage/>} />
        <Route path='/TracksPage/:id' element={<TracksPage/>} />
    </Routes>

   </Router>
   </>
  )
}

export default CatPlayer