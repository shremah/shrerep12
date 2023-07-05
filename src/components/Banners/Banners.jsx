import React from 'react'
import "./Banners.css";
function Banners() {
  return (
    <>
    <div className='bancont'>
        <div className='para'>
            <p style={{fontFamily:"Inter", fontWeight:"400", fontSize:"37.32px"}}>Hyundai IONIQ 5.</p> 
            <p style={{fontFamily:"Inter", fontWeight:"500", fontSize:"20.63px"}}>Power your world.</p>        </div>
           <img src='./banner.png'></img>
        <div className='banbtn'>
            <button className='btsty'>Explore IONIQ 5</button>
            <button  className='btsty'>3D Virtual Experience</button>
            <button  className='btsty'>Book Now</button>
        </div>
     
       
    </div>
    
   </>
  )
}

export default Banners