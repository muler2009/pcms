import React from 'react'
import { format } from 'date-fns'
import useLogout from '../../../../hooks/useLogout'

const TopNavBar = () => {
    const { onLogoutClicked } = useLogout()
  return (
    <div className='py-5 px-10 shadow-sm bg-white flex justify-between items-center overflow-x-hidden'>
        <h1 className='font-Poppins'>{format(new Date(), 'EEEE MMMM do, yyyy')}</h1>
        <p className="font-Poppins text-sm hover:underline cursor-pointer hover:text-blue-500" onClick={onLogoutClicked}>Logout</p>
    </div>
  )
}

export default TopNavBar