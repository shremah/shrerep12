import React from 'react'
import NavBar from '../Navbar/NavBar'
import Mpic from '../Mainpic/Mpic'
import Form from '../Form/Form'
import "./Product.css";
import Banners from '../Banners/Banners';
import Cards from '../LastCard/Cards';
import Footer from '../Footer/Footer';

function Product() {
  return (
    <div>
        <NavBar/>
        <Mpic/>
        <div className='contmain'>
            <p style={{fontFamily:"Ubuntu",fontWeight:"500",fontSize:"40px"}}>Add more to life with the new Grand i10 NIOS</p>
            <p style={{fontSize:"16px",fontFamily:"Ubuntu",fontWeight:"400" }}>It's the new definition of a perfect sync between exuberant design and advanced technology, that brings smart ease to your life. </p>
        </div>
        <div className='mainimg'><img src='./maincar.png' width={"700px"}  height={"400px"}/></div>
       <div className='pa'>
         <p style={{fontSize:"16px",fontWeight:500, fontFamily:"Ubuntu"}}>The new Grand i10 NIOS is an irresistible combination of cutting-edge technology, slick performance, and thoughtful safety for the young and restless. It is a driving force calling you to step in, stand out and add more to life</p> </div>
         <div className='cards'>
          <div className='caption'><img src='./first.png' width={"400px"}  height={"300px"}/> 
          <p>Bold & Stylish Design</p> <p>The New Grand i10 NIOS will catch your eye</p> </div>
        <div className='caption'> <img src='./second.png' width={"400px"}  height={"300px"}/>  <p>Smart & Innovative Technology</p> <p>The New Grand i10 NIOS comes with Best-in-segment 20.25 cm</p> </div>
         </div>
         <div> <p  className='headerss'>Looks like love</p>
         <p style={{textAlign:"center"}}>Style meets sophistication in the new Grand i10 NIOS.
The new Grand i10 NIOS is a flamboyant expression of refreshing design and agility.</p>
        </div>
     <div className='looks'>   <img src='./lookslo.png' width={"900px"} height={"500px"} ></img> </div>
        <Form/>
        <Banners/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Product