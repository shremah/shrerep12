import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import "./Caro.css";
import Carousel from 'react-bootstrap/Carousel';
import "./Findcar.css"
import {AiOutlineArrowRight} from 'react-icons/ai';

function ControlledTabsExample() {
  const [key, setKey] = useState('all');
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='centered'> 
        <div><h4 style={{ fontFamily:'Ubuntu',fontWeight:500, fontSize:'28.66px'}}> FIND YOUR CAR </h4> </div>
    {/* <Tabs 
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k,i) => {setIndex(i)}}
    >
      <Tab eventKey="all" title="All">
    
      </Tab>
      <Tab eventKey="suv" title="Suv">

      <img src='./g5.png'  height="400px" width= "500px"/>
      </Tab>
      <Tab eventKey="sedan" title="Sedan">
      <img src='./g3.png'  height="400px" width= "500px"/>
      </Tab>
      <Tab eventKey="hatchback" title="Hatchback">
      <img src='./g5.png'  height="400px" width= "500px"/>
      </Tab>
      <Tab eventKey="electric" title="Electric">
      <img src='./g5.png'  height="400px" width= "500px" />
      </Tab>
    </Tabs> */}
    <div className='tabs'>
    <button className="bstyle" onClick={()=>handleSelect(0)}>ALL</button>
    <button className="bstyle" onClick={()=>handleSelect(0)}>SUV</button>
   <button className="bstyle"  onClick={()=>handleSelect(1)}>SEDAN</button>
    <button className="bstyle"  onClick={()=>handleSelect(2)}>HATCH</button>
    <button className="bstyle"  onClick={()=>handleSelect(3)}>ELECTRIC </button>
    </div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="./caro1.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
         <div class="row">
        
    <div class="col-sm">
     <p>Suv i10 NIOS</p>
     <p>See pricing<AiOutlineArrowRight/></p>
    </div>
    <div class="col-sm content">
      <div style={{color:"#888888"}}>Starting At</div>
      <p  style={{fontSize:"13.46px", fontWeight:400}}>₹ 573400  </p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}> *Ex Showroom Price</p>
    
     
    </div>
    <div class="col-sm content">
    <div>Engine</div>
    <p  style={{fontSize:"13.46px", fontWeight:400}}>1.2l Kappa Petrol</p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}>1.2l Bi-Fuel (Petrol with CNG)</p>
    
    </div>
    <div class="col-sm content">
    <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#888888" }}>Transmission Available</p>
      <div>hi</div>
      <div>hi</div>
    </div>
  </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./caro1.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
         <div class="row">
        
    <div class="col-sm">
     <p>Sedan i10 NIOS</p>
     <p>See pricing<AiOutlineArrowRight/></p>
    </div>
    <div class="col-sm content">
      <div style={{color:"#888888"}}>Starting At</div>
      <p  style={{fontSize:"13.46px", fontWeight:400}}>₹ 573400  </p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}> *Ex Showroom Price</p>
    
     
    </div>
    <div class="col-sm content">
    <div>Engine</div>
    <p  style={{fontSize:"13.46px", fontWeight:400}}>1.2l Kappa Petrol</p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}>1.2l Bi-Fuel (Petrol with CNG)</p>
    
    </div>
    <div class="col-sm content">
    <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#888888" }}>Transmission Available</p>
      <div>hi</div>
      <div>hi</div>
    </div>
  </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./caro1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div class="row">
        
        <div class="col-sm">
        <p>Hatch i10 NIOS</p>
     <p>See pricing<AiOutlineArrowRight/></p>
    
        </div>
        <div class="col-sm content">
          <div  style={{color:"#888888"}}>Starting At</div>
          <p  style={{fontSize:"13.46px", fontWeight:400}}>₹ 573400  </p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}> *Ex Showroom Price</p>
    
        </div>
        <div class="col-sm content">
        <div style={{color:"#888888"}}>Engine</div>
        <p  style={{fontSize:"13.46px", fontWeight:400}}>1.2l Kappa Petrol</p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}>1.2l Bi-Fuel (Petrol with CNG)</p>
    
        </div>
        <div class="col-sm content">
        <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#888888" }}>Transmission Available</p>
          <p>hi</p>
          <div>hi</div>
        </div>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./caro1.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div class="row">
        
        <div class="col-sm">
        <p>Electric i10 NIOS</p>
     <p>See pricing<AiOutlineArrowRight/></p>
        </div>
        <div class="col-sm content" id="">
          <div>Starting At</div>
          <p  style={{fontSize:"13.46px", fontWeight:400}}>₹ 573400  </p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}> *Ex Showroom Price</p>
    
        </div>
        <div class="col-sm content">
        <div style={{color:"#888888"}}>Engine</div>
        <p  style={{fontSize:"11.46px", fontWeight:400}}>1.2l Kappa Petrol</p>
      <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#000000" }}>1.2l Bi-Fuel (Petrol with CNG)</p>
    
        </div>
        <div class="col-sm content">
        <p style={{fontSize:"13.46px", fontFamily:"Ubuntu", fontWeight:400,color:"#888888" }}>Transmission Available</p>
          <div>hi</div>
          <div>hi</div>
        </div>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledTabsExample;