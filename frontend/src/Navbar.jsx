import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
      <nav className="navbar">
       {isLoggedIn===true?(
        <div>
           
       <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
       ):(
        <div>
          <Link to="/">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
       )}
      </nav>

    </div>
  )
}

export default Navbar