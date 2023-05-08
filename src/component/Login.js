import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  navigate =  useNavigate();

  useEffect(()=>{
  const auth = localStorage.getItem('user');
  if(auth){
    navigate('/')
  }
  },[])
  const handleLogin = async() => {
    console.warn(email, password);
    let result = await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.json()
    if (result.name){
        localStorage.setItem('user',JSON.stringify(result))
        navigate('/')
    }else{
      alert('No user found')
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        className="inputbox"
        placeholder="Enter you Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="inputbox"
        placeholder="Enter you Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin} className="appbutton" type="button">
        Login
      </button>
    </div>
  );
}
