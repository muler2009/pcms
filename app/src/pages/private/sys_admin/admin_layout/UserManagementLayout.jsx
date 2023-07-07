import React from 'react'
import {AdminPrivateRoutes} from '../../../../routes/PrivateRoutes';
import { OuterContainer } from '../../../../assets/css/Container';
import { UserTopNavigation } from '../admin_component';
import { Outlet, Routes, Route } from 'react-router-dom';
import UserList from '../admin_pages/UserList';

const UserManagementLayout = () => {
  return (
    <OuterContainer>
        <UserTopNavigation />
        <Outlet />
    </OuterContainer>
  )
}

export default UserManagementLayout;

