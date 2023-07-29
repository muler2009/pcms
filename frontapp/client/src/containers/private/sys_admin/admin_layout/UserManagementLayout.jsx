import React from "react";
import { OuterContainer } from "../../../../assets/css/Container";
import { UserTopNavigation } from "../admin_component";
import { Outlet, Routes, Route } from "react-router-dom";

const UserManagementLayout = () => {
  return (
    <OuterContainer>
      <UserTopNavigation />
      <Outlet />
    </OuterContainer>
  );
};

export default UserManagementLayout;
