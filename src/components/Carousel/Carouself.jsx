








import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Carouself.css';
function Carouself() {
  return (
    <div
      className="container"
      style={{ display: 'block', padding: 30 }}
    >
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="./car.png" alt="Image One" />
          <div class="carousel-captions">
            <h5 style={{fontFamily:"ubuntu", fontWeight:500, fontSize: '34.39px'}}>I30 Hyundai</h5>
            <h6 style={{fontFamily:"ubuntu", fontWeight:400, fontSize: '17.2px'}}>
           Experience Cars in Augmented Reality: Discover future of Car Shopping
            </h6>
            <button className='bt'>EXPLORE IN AR</button>
         </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./car.png" alt="Image Two" />
          <div class="carousel-captions">
            <h5 style={{fontFamily:"ubuntu", fontWeight:500, fontSize: '34.39px'}}>I30 Hyundai</h5>
            <h6 style={{fontFamily:"ubuntu", fontWeight:400, fontSize: '17.2px'}}>
           Experience Cars in Augmented Reality: Discover future of Car Shopping
            </h6>
            <button className='bt'>EXPLORE IN AR</button>
         </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouself;