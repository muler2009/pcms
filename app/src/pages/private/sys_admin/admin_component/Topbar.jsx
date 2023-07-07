import React from 'react'
import useLogout from '../../../../hooks/useLogout'
import { OuterContainer, InnerContainer } from '../../../../assets/css/Container'
import { format } from 'date-fns'

const Topbar = () => {
  const {onLogoutClicked} = useLogout()
  return (
    <OuterContainer className='font-Poppins py-3 px-10 bg-[#EEE] text-black flex justify-between items-center border-b-[2px] border-black'>
      <InnerContainer className='flex justify-center items-center space-x-5 bg-white'>
        {format(new Date(), 'H:mm:ss a')}
      </InnerContainer>
      <InnerContainer >
        <h1 className="text-sm uppercase font-bold">
          {format(new Date(), 'EEEE, do MMMM yyyy')}
        </h1>
      </InnerContainer>
      <p className="font-Poppins text-sm hover:underline cursor-pointer hover:text-blue-500" onClick={onLogoutClicked}>Logout</p>
  </OuterContainer>
  )
}

export default Topbar