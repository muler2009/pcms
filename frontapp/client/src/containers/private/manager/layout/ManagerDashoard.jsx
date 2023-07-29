import React from "react";
import {
  OuterContainer,
  InnerContainer,
} from "../../../../assets/css/Container";
import {
  SideBarManagerNavigation,
  TopSubNavigationBar,
  Topbar,
} from "../components";
import { Footer } from "../../../../layout/components";
import { Outlet } from "react-router-dom";
import { ManagerPrivateRoutes } from "../../../../routes/PrivateRoutes";

const ManagerDashoard = () => {
  return (
    <OuterContainer className="flex flex-col">
      <Topbar />
      <InnerContainer className="flex justify-start items-start">
        <SideBarManagerNavigation />
        <InnerContainer className="flex-flex-col w-full">
          <TopSubNavigationBar />
          <ManagerPrivateRoutes />
          <Outlet />
        </InnerContainer>
      </InnerContainer>
      {/* <Footer/> */}
    </OuterContainer>
  );
};

export default ManagerDashoard;
