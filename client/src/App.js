import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Navigator from "./pages/navigator";
import Login from './pages/Login'
import Register from "./pages/Register"
const App =()=>{
   
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigator/>}/>
                <Route exact path="login" element={<Login/>}/>
                <Route exact path="register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
        
    
    )
}
export default App