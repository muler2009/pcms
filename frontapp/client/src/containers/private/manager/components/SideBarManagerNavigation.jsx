import React, { useState } from "react";
import { format } from "date-fns";
import {
  InnerContainer,
  OuterContainer,
} from "../../../../assets/css/Container";
import { sidenav } from "../constants/sidenav";
import SidebarSubMenuNav from "./SidebarSubMenuNav";
import * as AiIcons from "react-icons/ai";

const SideBarManagerNavigation = () => {
  const [controller, setController] = useState(true);

  return (
    <OuterContainer className="font-Poppins bg-[#ffffff] flex flex-col justify-between items-center border-r-[1px] h-[95vh]">
      <InnerContainer
        className={`${
          !controller ? "w-20" : "w-[19rem]"
        } border-[#ddd] flex flex-col `}
      >
        <div className="px-5 my-2 mx-6 py-16 flex flex-col gap-4 bg-[#f6f6f6] rounded-md">
          <h1 className="text-sm">email@gmail.com</h1>
          <h1 className="text-sm">
            Today: {format(new Date(), "do, MM yyyy")}
          </h1>
        </div>

        <div className="relative left-0 right-10 border-b-[1px] py-1 mx-10 mb-5">
          <h1 className="uppercase text-sm font-semibold">MAIN MENU</h1>
        </div>

        {sidenav?.map((sideParent, index) => {
          return (
            <SidebarSubMenuNav
              key={index}
              sideParent={sideParent}
              controller={controller}
            />
          );
        })}
      </InnerContainer>
      <InnerContainer className="border-t-[1px] w-full px-10 py-10 cursor-pointer">
        <p
          className="text-sm flex items-center hover:text-red-700 hover:scale-[1.05]"
          onClick={() => alert("You are about to log out")}
        >
          <span className="mr-1">
            <AiIcons.AiOutlineLogout />
          </span>
          Logout
        </p>
      </InnerContainer>
    </OuterContainer>
  );
};

export default SideBarManagerNavigation;
