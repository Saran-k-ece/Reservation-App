import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Hotels from './Pages/Hotels/Hotel'
import Navbar from './Components/Navbar/Navbar'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Holidays from './Components/Holidays/Holidays'
import List from './Pages/List/List'


const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
      {showLogin && <LoginPopUp  setShowLogin={setShowLogin}/>}
      <Navbar setShowLogin={setShowLogin}/>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels/:id' element={<Hotels />} />
          <Route path='/holidays' element={<Holidays />} />
          <Route path='/hotels' element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
