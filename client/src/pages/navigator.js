import React from "react";
import {Link } from 'react-router-dom' 

const App= ()=>{
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to={"/Login"}>login</Link>
      <Link to={"/register"}>register</Link>
    </div>
  )
}
export default App

