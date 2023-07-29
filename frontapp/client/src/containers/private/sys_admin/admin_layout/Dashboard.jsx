import React from "react";

import { Footer } from "../../../../layout/components";
import { Outlet } from "react-router-dom";
import { AdminPrivateRoutes } from "../../../../routes/PrivateRoutes";
import {
  InnerContainer,
  OuterContainer,
} from "../../../../assets/css/Container";
import { SideBar, TopNavBar, Topbar } from "../admin_component";

const Dashboard = () => {
  return (
    <OuterContainer>
      <main className="flex flex-1 h-screen bg-[#fafcfe]">
        <SideBar />
        <InnerContainer className="w-full flex flex-col ">
          <Topbar />
          <Outlet />
          <AdminPrivateRoutes />
        </InnerContainer>
      </main>
      <Footer />
    </OuterContainer>
  );
};

export default Dashboard;
