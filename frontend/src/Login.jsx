import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()

 async function handlelogin(e){
  e.preventDefault()
  try{
    let response=await axios.post("http://localhost:8500/login",{email,password})
    console.log(response)
    // let data=await response.json()
    alert(response.data.message)
    setIsLoggedIn(true)
    setEmail("")
    setPassword("")
    navigate("/home")

  }
  catch(error){
    alert(error.response.data.message)
  }
 }
  return (
    <div>
      <style>
        {`
          .login-page {
            min-height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .login-form {
            width: 350px;
            padding: 35px;
            border: 1px solid #ddd;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          .login-form h2 {
            text-align: center;
            margin-bottom: 25px;
            color: #333;
          }

          .login-form input {
            width: 100%;
            padding: 12px;
            margin-bottom: 18px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
            outline: none;
          }

          .login-form input:focus {
            border-color: #333;
          }

          .login-form button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 6px;
            background: #404143;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }

          .login-form button:hover {
            background: #4e5154;
          }
        `}
      </style>

      <div className="login-page">
        <form className="login-form" onSubmit={handlelogin}>

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button  type="submit">Login</button>

        </form>

        
      </div>
    </div>
  )
}

export default Login




