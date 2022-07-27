import React from 'react'
import { useState } from 'react';
// import './styles/login.css';


function App() {


  const [email, setEmail ]= useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event){
    event.preventDefault();
   const response = await fetch('http://localhost:1337/api/login', {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        email,
        password,
      }),
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
       
        <input 
         type="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         placeholder='Email'
         />
         <br/>
        <input 
         type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
         <br/>
        <input
         type="submit"
         value="register"
         />
      </form>
    </div>
    )
}

export default App;
