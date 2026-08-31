import React, { useState } from 'react'
import axios from "axios"
import './Signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileno, setMobileno] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
 async function handlesubmit(e){
  e.preventDefault()
  try{
   const response=await axios.post("http://localhost:8500/signup",{name,email,mobileno,password})
   console.log(response)
   alert(response.data.message)
   navigate("/login")
  }
  catch(error){
alert(error.response.data.message)
  }
}
  return (
    <div className="signup-container">
      <form className="signup-form" action="" onSubmit={handlesubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="number"
          placeholder="Mobile Number"
          onChange={(e) => setMobileno(e.target.value)}
          value={mobileno}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup