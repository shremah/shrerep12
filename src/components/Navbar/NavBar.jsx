import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BiSolidShareAlt } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineSearch } from 'react-icons/ai';

import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./logo.png" alt="Logo" />
        <span style={{ color: '#4291aa' , fontWeight :'bolder', fontStyle:"italic"}}>AUTO</span>
      </div>
      <ul className="navbar-items">
        <li className="navbar-item">NEW CARS</li>
        <li className="navbar-item">OLD CARS</li>
        <li className="navbar-item">OWNING</li>
        <li className="navbar-item">OFFERS</li>
        <li className="navbar-item">CONTACT US</li>
      </ul>
      <div className="navbar-icons">
        <ul className="items">
          <li>
            {' '}
            <CgProfile />
          </li>
          <li>
            {' '}
            <BiSolidShareAlt />
          </li>
          <li>
            {' '}
            <CiLocationOn />{' '}
          </li>
          <li>
            {' '}
            <AiOutlineSearch />{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
