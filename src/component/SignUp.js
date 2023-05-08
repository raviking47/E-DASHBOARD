import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; 



export default function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  useEffect(()=>{
    const auth =  localStorage.getItem('user')
    if(auth){
       navigate('/')  
    }
  })
  const collectData = async()=>{
    console.warn(name,email,password)
    let result = await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.json()
    console.warn( result)
    localStorage.setItem("user",JSON.stringify(result))
    if(result){
      navigate('/')
    }
  }

  return (
    <div className="container">
      <h1 className="inputbox">Register</h1>
      <input
        className="inputbox"
        type="text"
        placeholder="Enter Name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputbox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={collectData} className="appbutton" type="button">
        Sign Up
      </button>
    </div>
  );
}
