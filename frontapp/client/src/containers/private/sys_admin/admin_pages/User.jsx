import React from "react";
import { OuterContainer } from "../../../../assets/css/Container";
import UsersList from "../admin_component/UsersList";
import UserHandler from "../admin_component/UserHandler";

const User = () => {
  return (
    <OuterContainer className="w-full flex flex-col gap-0.5 px-1 mt-1 ">
      <UserHandler />
      <UsersList />
    </OuterContainer>
  );
};

export default User;
