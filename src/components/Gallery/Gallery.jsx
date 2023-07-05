import React from 'react';
import './Gallery.css';
import {CiShare1} from 'react-icons/ci'; 
import {IoIosArrowForward}  from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    id: 1,
    imageSrc: './g1.png',
   
    description: 'Veloster',
    price:'12,20,000'
  },
  {
    id: 2,
    imageSrc: './g2.png',
   
    description: 'Elantra',
    price:'12,20,000'
  },
  {
    id: 3,
    imageSrc: './g3.png',
    
    description: 'Hyundai i30',
    price:'12,20,000'
  },
  {
    id: 4,
    imageSrc: './g4.png',
   
    description: 'Kona Electic',
    price:'12,20,000'
  },
  {
    id: 5,
    imageSrc: './g2.png',
   
    description: 'TUCSON',
    price:'12,20,000'
  },
  {
    id: 6,
    imageSrc: './g5.png',
    
    description: 'Exter',
    price:'12,20,000'
  },
 
 

];

const Gallery = () => {
    const navigate = useNavigate();
  return (<>
  <h4 style={{textAlign:"center", fontFamily:'Ubuntu', fontWeight:500, fontSize:'28.66px' }}>EXPLORE MORE MODELS</h4>
    <div className="card-container">
    
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.imageSrc} alt="Card Image" className="card-image" />
         
           <div className="card-description">
            <h5 >{card.description}</h5>
            <h6>Rs {card.price}</h6>
            </div>

          <div className='btns'>
            <button className='bt1' onClick={()=>navigate("/PComp")}> <CiShare1/> BUILD YOUR OWN</button>
            <button className='bt2'> <IoIosArrowForward/> COMPARE</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
