import React from 'react'
import "./Mpic.css"
import { FiShare } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
function Mpic() {
  return (
    <div className='mains'>
    <div className='cont'>
    <ul className='link'>
        {/* <ul className='listlink'> */}
            <a href='#'><u>HOME</u></a>
            <a  href='#'><u>Find a Car</u> </a>
            <a  href='#'><u>Grandi10 Nios</u></a>
            <a  href='#'><u>Highlights</u></a>
        </ul>
        <p><FiShare/> Page Sharing</p>
       </div>
        
        {/* <img src='./main.png'></img> */}
      <div className='images'><img src='./main.png' width={"1200px"}/> </div> 
       <div className='tbt'>
        <button className='stylebt'>BUILD YOUR CAR</button>
        <button  className='stylebt'>COMPARE</button>
       </div>
       <div className='nav2'>
       <ul> <a href='#'> Grand NIOS</a>
        </ul>
        <ul> <a href='#'> Highlights</a>
        </ul>
        <ul> <a href='#'> Exterior</a>
        </ul>
        <ul> <a href='#'> Imterior</a>
        </ul>
        <ul> <a href='#'> Performance</a>
        </ul>
        <ul> <a href='#'> Safety</a>
        </ul>
        <ul> <a href='#'> Convinence</a>
        </ul>
        <ul> <a href='#'> Specification</a>
        </ul>
        <ul> <a href='#'> Features</a>
        </ul>
        <ul> <a href='#'>< HiDownload/> E brochure</a>
        </ul>
       </div>
      </div>
  )
}

export default Mpic