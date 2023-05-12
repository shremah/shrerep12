
import headerImg from './main.jpg';
import './App.css';
import Navbari from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import FeedbackForm from './Components/FeedbackForm';
import NatureContact from './Components/NatureContact';
import AboutUs from './Components/AboutUs';

import {
  Routes,
  
 Route,
  
  } from "react-router-dom";
import Bonsai from './Components/Bonsai';
import FruitSapling from './Components/FruitSapling';
import OrganicManure from './Components/OrganicManure';
import GardeningTools from './Components/GardeningTools';
import FlowersSapling from './Components/FlowerSapling';
import LoginPage from './Components/LoginPage';
import VegetableSeeds from './Components/VegetableSeeds';
import FruitSeeds from './Components/FruitSeeds';





function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={headerImg} alt="Header" style={{height: "200px", width:"100%"}}/>
      </header>
     <Navbari/>
      <Routes>
        
      <Route path="/Sidebar" element ={<Sidebar/>}></Route>
      <Route path="/" element={<LoginPage/>}>

</Route>

     
          <Route path="/AboutUs" element={<AboutUs/>}>

          </Route>

          <Route path="/NatureContact" element={<NatureContact/>}>

          </Route>

          <Route path="/FeedbackForm" element={<FeedbackForm/>}>

          </Route>
          
          <Route path="/Bonsai" element={<Bonsai/>}>

          </Route>
          <Route path="/LoginPage" element={<LoginPage/>}>

</Route>

          

<Route path="/FruitSapling" element={<FruitSapling/>}>

</Route>

<Route path="/OrganicManure" element={<OrganicManure/>}>

</Route>
<Route path="/GardeningTools" element={<GardeningTools/>}>

</Route>
<Route path="/FlowerSapling" element={<FlowersSapling/>}>

          </Route>

          <Route path="/VegetableSeeds" element={<VegetableSeeds/>}>

</Route>
<Route path="/FruitSeeds" element={<FruitSeeds/>}>

</Route>
         



</Routes>
</div>
     
    
    
    
  );
}

export default App;
 

     
     

