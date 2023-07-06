import React from 'react'
import Calendar from 'react-calendar'
import '../../../../assets/css/custom.css'
import { OuterContainer, InnerContainer } from '../../../../assets/css/Container'
import { TableStructure } from '../../../../components/Reuseable'
import { MODULE_COLUMN, data } from '../constants/test'
import Users from './Users'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import { AdminProfile } from '../admin_component'
import { ResultChart, SystemUsage } from '../constants/Contents'


const MainDashboard = () => {
  return (
    <OuterContainer className="relative w-full p-2">
      <InnerContainer className="flex space-x-5">
        <InnerContainer className="w-3/4 flex flex-col">
          <div className="flex justify-between space-x-2">
            <ResultChart />
            <SystemUsage />
            
          </div>
          <h1 className="my-1.5 font-Poppins uppercase text-[25px] font-bold">User 
            <span className="text-[#00bfdd] ml-2">Accounts</span>
          </h1>
          <Users className="bg-white" />
        </InnerContainer>
        <InnerContainer className="w-1/4">
          <AdminProfile />
          <Calendar 
            prevLabel = {<MdIcons.MdOutlineKeyboardArrowLeft size={20}/>}
            prev2Label = {<BsIcons.BsArrowLeftCircleFill size={20} />}
            nextLabel={<MdIcons.MdOutlineKeyboardArrowRight size={20}/>}
            next2Label={<BsIcons.BsFillArrowRightCircleFill size={20} />} 
          />
        </InnerContainer>
      </InnerContainer>

   
      
    </OuterContainer>
  )
}

export default MainDashboard