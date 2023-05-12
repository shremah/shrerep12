import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import homeImg from "../home.jpg";


const Sidebar = () => {
  return (
    <div className='col-md-3' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="white">
        <CDBSidebarHeader prefix={<i className="fa  fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            PRODUCT CATEGORIES
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Bonsai" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Bonsai</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FlowerSapling" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Flower Sapling</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FruitSapling" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Fruit Sapling</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/OrganicManure" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Organic Manure</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/GardeningTools" activeClassName="activeClicked">
              <CDBSidebarMenuItem >GardeningTools
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/VegetableSeeds" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Vegetable Seeds
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FruitSeeds" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Fruit Seeds
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
      <div className='col-md-8' ><img src={homeImg} alt='home' style={{ height: "600px", width: "1000px", marginTop: "-1px" }}></img></div>
    </div>

  );
};

export default Sidebar;