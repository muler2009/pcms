import React from 'react'
import { Footer, Header } from '../../../../layout/components'
import { Outlet, Route, Routes } from 'react-router-dom'
import {AdminPrivateRoutes} from '../../../../routes/PrivateRoutes';
import Test from '../../../test_page/Test';
import { InnerContainer, OuterContainer } from '../../../../assets/css/Container';
import {SideBar, TopNavBar} from '../admin_component';


const Dashboard = () => {
  return (
    <OuterContainer>        
      <main className="flex flex-1 h-screen bg-[#fafcfe]">
        <SideBar /> 
        <InnerContainer className="w-full flex flex-col ">
          <TopNavBar />
          <Outlet />
          <AdminPrivateRoutes />    
        </InnerContainer> 
      </main>
      <Footer />
    </OuterContainer>
  );
};

export default Dashboard;