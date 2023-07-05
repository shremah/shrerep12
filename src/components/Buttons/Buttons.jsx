import React from 'react'
import "./Buttons.css";
import {useNavigate} from "react-router-dom"
import Product from "../Pages/Product";
function Buttons() {
    const navigate = useNavigate();
  return (
    <div className='bts'>
        <button className='butt' >Build your Car</button>
        <button className='butt'>Download E-brochure</button>
        <button className='butt'>Click to Buy</button>
        <button className='butt' onClick={()=>navigate("/Product")}>Get Info</button>
    </div>
  )
}

export default Buttons