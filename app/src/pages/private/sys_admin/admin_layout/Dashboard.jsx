import React from 'react'
import { Footer, Header } from '../../../../layout/components'
import { Outlet, Route, Routes } from 'react-router-dom'
import {AdminPrivateRoutes} from '../../../../routes/PrivateRoutes';
import Test from '../../../test_page/Test';
import { InnerContainer } from '../../../../assets/css/Container';
import SideBar from '../admin_component/SideBar';
import TopNavBar from '../admin_component/TopNavBar';

const Dashboard = () => {
  return (
    <div>      
     
      
      <main className="flex flex-1 h-screen bg-[#fafcfe]">
        <SideBar /> 
        <div className="w-full flex flex-col ">
          <TopNavBar />
          <Outlet />
          <AdminPrivateRoutes />    
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;