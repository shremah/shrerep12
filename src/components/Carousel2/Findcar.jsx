
import Carousel from 'react-bootstrap/Carousel';
import "./Findcar.css"
import {AiOutlineArrowRight} from 'react-icons/ai';

function Findcar() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./caro1.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
         <div class="row">
        
    <div class="col-sm">
     <p>Grand i10 NIOS</p>
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
        <p>Grand i10 NIOS</p>
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
        <p>Grand i10 NIOS</p>
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
  );
}

export default Findcar;