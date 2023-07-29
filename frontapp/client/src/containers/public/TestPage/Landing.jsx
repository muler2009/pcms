import React from "react";
import { Header } from "../../../layout/components";
import { Outlet } from "react-router-dom";
import { PublicTestRoutes } from "../../../routes/publicRoutes";
import { InnerContainer } from "../../../assets/css/Container";

const Landing = () => {
  return (
    <>
      <Header />
      <InnerContainer className="flex flex-col">
        <Outlet />
        <PublicTestRoutes />
      </InnerContainer>
    </>
  );
};

export default Landing;
