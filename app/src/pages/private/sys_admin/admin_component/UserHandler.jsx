import React from "react";
import {
  InnerContainer,
  OuterContainer,
} from "../../../../assets/css/Container";
import Tabs from "../../../../components/Reuseable/Tabs";
import { userTabs } from "../constants/userlink";

const UserHandler = () => {
  return (
    <OuterContainer className="bg-white border-[1px] mx-5">
      <InnerContainer className="py-3">
        <Tabs tabs={userTabs} />
      </InnerContainer>
    </OuterContainer>
  );
};

export default UserHandler;
