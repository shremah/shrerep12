

import React from 'react'
import "./Tools.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BiSolidCarMechanic} from "react-icons/bi";
import {BsFillCalculatorFill} from "react-icons/bs";
function Tools() {
  return (
   <>
        <p style={{ fontFamily:'Ubuntu',fontWeight:500,textAlign:"center", fontSize:'30.81px'}}>SHOPPING TOOLS  </p>
        <div className='wrap'>
       
      <div className='item'>
      <AiOutlineShoppingCart/>
        <p  style={{fontFamily:"Inter", fontWeight:700, fontSize:"20.46px", color:"black"}}>Online Store </p>
        <p style={{fontFamily:"Inter", fontWeight:400, fontSize:"15.46px", color:"black"}}> Discover your new Mercedes</p>

      </div>
      <div className='item'>
     
        <p  style={{fontFamily:"Inter", fontWeight:700, fontSize:"20.46px", color:"black"}}>Nearest Showroom </p>
        <p style={{fontFamily:"Inter", fontWeight:400, fontSize:"15.46px", color:"black"}}> Find a Mercedes-Benz partner</p>

      </div>
      <div className='item'>
      <BiSolidCarMechanic/>
        <p  style={{fontFamily:"Inter", fontWeight:700, fontSize:"20.46px", color:"black"}}>Build your Car </p>
        <p style={{fontFamily:"Inter", fontWeight:400, fontSize:"15.46px", color:"black"}}> Configure your Vehicle now</p>

      </div>
      <div className='item'>
      <BsFillCalculatorFill/>
        <p style={{fontFamily:"Inter", fontWeight:700, fontSize:"20.46px", color:"black"}}>Finance Insurance </p>
        <p style={{fontFamily:"Inter", fontWeight:400, fontSize:"15.46px", color:"black"}} >Find your suitable product</p>

      </div>
    </div>
    </>
  )
}

export default Tools