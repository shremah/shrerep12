import React from 'react'
import "./Cards.css";
import { PiWarningCircleThin } from "react-icons/pi";
function Cards () {
  return (
    <div className='cardcont'>
        <h3 >EXPLORE MORE </h3>
        <div className='cards'>
          <div className='caption'><img src='./gal1.png'/> 
          <p>Know more about engines</p>  </div>
        <div className='caption'> <img src='./gal2.png'/>  <p>Special Offer</p> </div>
        <div className='caption'> <img src='./gal3.png'/>  <p>Click to buy</p> </div>
        <div className='caption'> <img src='./gal4.png' />  <p>Find a Dealer & Website</p> </div>
         </div>
        <p className='matter'> <PiWarningCircleThin/> The specification above are subject to change. Images shown above may vary from actual product. Some of the equipments illustrated or described above may not be
supplied as standard equipment and may be available at extra cost.  Hyundai Motor India reserves the right to change specification & equipments of any product without
prior notice. Please consult your nearby dealer for full information and availability on colours and trim.</p> 
    </div>
  )
}

export default Cards