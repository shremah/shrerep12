// import React from "react";
// import { GridCarousel } from "react-grid-carousel";

// const Multi = () => {
//   return (
//     <div>
//       <h2>Multi Card Carousel</h2>
//       <GridCarousel
//         cols={3}
//         rows={1}
//         gap={10}
//         loop
//         autoplay={3000}
//         responsiveLayout={[
//           {
//             breakpoint: 768,
//             cols: 2,
//             rows: 1,
//             gap: 10
//           },
//           {
//             breakpoint: 480,
//             cols: 1,
//             rows: 1,
//             gap: 10
//           }
//         ]}
//       >
//         <GridCarousel.Item>
//           <div className="card">
//             <h3>Card 1</h3>
//             <p>This is the content of card 1</p>
//           </div>
//         </GridCarousel.Item>
//         <GridCarousel.Item>
//           <div className="card">
//             <h3>Card 2</h3>
//             <p>This is the content of card 2</p>
//           </div>
//         </GridCarousel.Item>
//         <GridCarousel.Item>
//           <div className="card">
//             <h3>Card 3</h3>
//             <p>This is the content of card 3</p>
//           </div>
//         </GridCarousel.Item>
//         <GridCarousel.Item>
//           <div className="card">
//             <h3>Card 4</h3>
//             <p>This is the content of card 4</p>
//           </div>
//         </GridCarousel.Item>
//         <GridCarousel.Item>
//           <div className="card">
//             <h3>Card 5</h3>
//             <p>This is the content of card 5</p>
//           </div>
//         </GridCarousel.Item>
//         <GridCarousel.Item>
//           <div className="card">
//             <h3>Card 6</h3>
//             <p>This is the content of card 6</p>
//           </div>
//         </GridCarousel.Item>
//       </GridCarousel>
//     </div>
//   );
// };

// export default Multi;

import React , {useState} from 'react'
import './Multi.css'

const Multi = () => {
    const contentData = [
        {
                imageUrl: './g1.png',
                date : '25-07-2001',
                description: 'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
              },
              {
                imageUrl: './g1.png',
                date : '2-07-2001',
                description: 'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
              },
              {
                imageUrl: './g1.png',
                date : '13-07-2001',
                description:'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
              },
        {
            imageUrl: './g3.png',
            date : '26-07-2001',
            description: 'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
          },
          {
            imageUrl: './g3.png',
            date : '25-09-2001',
            description: 'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
          },
          {
            imageUrl: './g3.png',
            date : '25-07-2008',
            description: 'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
          },
          {
            imageUrl: './g4.png',
            date : '25-07-2001',
            description: 'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
          },
          {
            imageUrl: './g4.png',
            date : '11-07-2001',
            description:'Hyundai Motor’s IONIQ 5 N Enters FinalPhase Of Racetrack Capability Testing..'
          },
        // Add more content objects as needed
      ];
    
      const contentsPerPage = 4;

      const [currentPage, setCurrentPage] = useState(1);

      const totalPages = Math.ceil(contentData.length / contentsPerPage);
    
      const nextSlide = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
      };
    
      const prevSlide = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
      };
    
      const renderContent = () => {
        const startIndex = (currentPage - 1) * contentsPerPage;
        const endIndex = startIndex + contentsPerPage;
    
        return contentData.slice(startIndex, endIndex).map((content, index) => (
          <div key={index} className="carousel-slide">
            <div className="content">
                <img src={content.imageUrl} alt={content.title} />
              <p style={{color  : 'grey'}}>{content.date}</p>
              <p>{content.description}</p>
            </div>
          </div>
        ));
      };

  return (
    <>
    <div style={{textAlign:"center", fontFamily:"Ubuntu",fontWeight:500, fontSize:"30.81px"}}> NEW  TRENDS </div>
          <div className="multi-content-carousel">
         
      <div className="carousel-container">
      <button className="prev-button" onClick={prevSlide}>
            <img src='./arrow.png' alt='yo' />
        </button>
        {renderContent()}
        <button className="next-button" onClick={nextSlide}>
        <img src='./forward.png' alt='yo' />
        </button>
        </div>
      

      {/* <div className="carousel-controls">
        <button className="prev-button" onClick={prevSlide}>
          Prev
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div> */}
    </div>

    </>
  )
}

export default Multi

