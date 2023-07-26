import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "../../../../assets/css/custom.css";
import {
  OuterContainer,
  InnerContainer,
} from "../../../../assets/css/Container";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import { AdminProfile } from "../admin_component";
import { ResultChart, SystemUsage } from "../constants/Contents";
import { useSelector, useDispatch } from "react-redux";
import { useGetCSRFTokenQuery } from "../../../../services/api/authApiSlice";
import {
  csrf_token,
  getCSRFToken,
  getCsrf_Token,
  setCsrfToken,
} from "../../../../services/features/auth/authSlice";

const MainDashboard = () => {
  // const dispatch = useDispatch();
  // const csrfToken = useSelector(csrf_token);
  // const { data } = useGetCSRFTokenQuery();
  // // useEffect(() => {
  // //   dispatch(getCsrf_Token());
  // // }, []);

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setCsrfToken(data.csrftoken));
  //     console.log(data.csrftoken);
  //   }
  //   // setcsrftoken(getCookie("csrftoken"));
  // }, [data, dispatch]);

  // console.log(csrfToken);

  return (
    <OuterContainer className="relative w-full p-2">
      <InnerContainer className="flex space-x-5">
        <InnerContainer className="w-3/4 flex flex-col">
          <div className="flex justify-between space-x-2 -z-0">
            <ResultChart />
            <SystemUsage />
          </div>
          <h1 className="my-1.5 font-Poppins uppercase text-[25px] font-bold">
            User
            <span className="text-[#00bfdd] ml-2">Accounts:</span>
          </h1>
        </InnerContainer>
        <InnerContainer className="w-1/4">
          <AdminProfile />
          <Calendar
            prevLabel={<MdIcons.MdOutlineKeyboardArrowLeft size={20} />}
            prev2Label={<BsIcons.BsArrowLeftCircleFill size={20} />}
            nextLabel={<MdIcons.MdOutlineKeyboardArrowRight size={20} />}
            next2Label={<BsIcons.BsFillArrowRightCircleFill size={20} />}
          />
        </InnerContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default MainDashboard;
