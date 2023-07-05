import React from 'react'
import { OuterContainer, InnerContainer } from '../../../../assets/css/Container'
import { TableStructure } from '../../../../components/Reuseable'
import { MODULE_COLUMN, data } from '../constants/test'
import Users from './Users'



const MainDashboard = () => {
  return (
    <OuterContainer className="relative w-full p-2">
        <InnerContainer className="flex justify-center items-center space-x-5 rounded-sm">
            <div className="w-2/3 flex flex-col">
                <div className="flex space-x-5 border-[1px]">
                  <div className="border-[1px]">1</div>
                  <div className="border-[1px]">2</div>
                </div>
                <div className="">
                  <Users />
                </div>
            </div>
            <div className="w-1/3 border-[1px]">
              ASDAS
            </div>

        </InnerContainer>
    </OuterContainer>
  )
}

export default MainDashboard