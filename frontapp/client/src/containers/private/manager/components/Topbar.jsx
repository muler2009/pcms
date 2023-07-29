import React from 'react'
import { Icon, InnerContainer, OuterContainer } from '../../../../assets/css/Container'
import * as HiIcons from 'react-icons/hi2'
import image from '../../../../assets/images/image.png'


const Topbar = () => {
  return (
    <OuterContainer className="px-10 py-4 bg-[#0f1e3f] sticky top-0">
      <InnerContainer className="flex justify-between items-center">
          <div className={`flex flex-col font-Poppins`}>
              <h1 className="font-bold text-[25px] text-white">PCMS <span className="text-[#00bfdd]">ProV</span></h1>
          </div>

          <div className="flex space-x-3 cursor-pointer">
            <div className="flex space-x-4 border-r-[1px] border-[#9eacc7] px-4">
              <Icon><HiIcons.HiOutlineHome size={22} /></Icon>
              <Icon><HiIcons.HiOutlineEnvelope size={22} /></Icon>
              <Icon><HiIcons.HiOutlineBellAlert size={22} /></Icon>
            </div>
            <img src={image} alt='User Profile' className="w-8 h-8 object-cover object-center"  />
          </div>
          
      </InnerContainer>
    </OuterContainer>
  )
}

export default Topbar