import React from 'react'
import NavBar from "../Navbar/NavBar"
import Carouself from "../Carousel/Carouself"
import Footer from '../Footer/Footer'
import Caro from "../Carousel2/Caro"
import Gallery from '../Gallery/Gallery'
import Buttons from '../Buttons/Buttons'
import Tools from '../Tools/Tools'
import Multi from '../Multicard/Multi'

function Index() {
  // const cards = [
  //   {
  //     imageUrl: './g1.png',
  //     title: 'Card 1',
  //     description: 'This is the description for Card 1.',
  //   },
  //   {
  //     imageUrl: './g1.png',
  //     title: 'Card 2',
  //     description: 'This is the description for Card 2.',
  //   },
  //   {
  //     imageUrl: './g1.png',
  //     title: 'Card 3',
  //     description: 'This is the description for Card 3.',
  //   },
  //   // Add more card objects as needed
  // ];

  return (
    <>
<NavBar/>
    <Carouself/>
   <Caro/>
   <Buttons/>
   <Gallery/>
  <Multi/>
   <Tools/>
   
   <Footer/>
    {/* <h2 style="text-align: center">My Heading</h2> */}
    
    {/* <CarCard />
    <Footer></Footer>
    <>hi</> */}
  </>
  )
}

export default Index
