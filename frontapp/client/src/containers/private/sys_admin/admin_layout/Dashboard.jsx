import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useGetCsrfTokenQuery } from "../../../../services/api/authApiSlice";
import { Footer, Header } from "../../../../layout/components";
import { Outlet, Route, Routes } from "react-router-dom";
import { AdminPrivateRoutes } from "../../../../routes/PrivateRoutes";
import Test from "../../../test_page/Test";
import {
  InnerContainer,
  OuterContainer,
} from "../../../../assets/css/Container";
import { SideBar, TopNavBar, Topbar } from "../admin_component";
import {
  csrf_token,
  getCsrfToken,
} from "../../../../services/features/auth/authSlice";

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
