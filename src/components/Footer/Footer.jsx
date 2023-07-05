import React from 'react';
import './Footer.css';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoYoutube} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi';
import {BiLogoLinkedin} from 'react-icons/bi';
import {BiLogoInstagram} from 'react-icons/bi';
import {BiLogoWhatsapp}  from 'react-icons/bi';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src='./logo2.png' width="120px"/>
         {/* <p style={{color:"white", fontStyle:'italic', fontWeight:500, fontSize:'17.2px'}}>Auto</p>
       */}
      <b style={{color:"white", fontFamily:"ubuntu", fontStyle:"italic", fontSize:"12.2px"}}> AUTO </b>
      
        <ul className='list'>
            <li> Worldwide| </li>
            <li> Contact Us| </li>
            <li> Legal Disclaimer| </li>
            <li>Sitemap| </li>
            <li> Hyundai Suppliers| </li>
            <li> Dealer Application </li>
        
        </ul>
        
            <ul className='iconlist'>
           <BiLogoFacebook/> 
           <BiLogoYoutube/>
           <BiLogoTwitter/>
           <BiLogoLinkedin/>
           <BiLogoInstagram/>
           <BiLogoWhatsapp/>
            </ul>
         
        </div>
        <div className='copy'> 
        Copyright 2023 Capgemini Auto India. All Rights Reserved.
        </div>
    </footer>
  );
};

export default Footer;
