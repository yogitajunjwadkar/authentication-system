import React from 'react'
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Signup from './Signup'
import Home from './Home'
import Login from './login'
import Navbar from './Navbar'
import { useState } from 'react'
import About from './About'
import Contact from './Contact'


const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/home" element={isLoggedIn===true?(<Home/>):(<Navigate to="/login"/>)}/>
        <Route path="/about" element={isLoggedIn===true?(<About/>):(<Navigate to="/login"/>)}/>
        <Route path="/contact" element={isLoggedIn===true?(<Contact/>):(<Navigate to="/login"/>)}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
