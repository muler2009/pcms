import React from 'react'
import useLogout from '../../../../hooks/useLogout'

const TopNavBar = () => {
    const { onLogoutClicked } = useLogout()
  return (
    <div className='py-5 px-10 shadow-sm bg-white flex justify-between items-center'>
        <h1>Admin Page</h1>
        <p className="font-Poppins text-sm hover:underline cursor-pointer hover:text-blue-500" onClick={onLogoutClicked}>Logout</p>
    </div>
  )
}

export default TopNavBar