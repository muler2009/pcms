import React from 'react'
import im from '../../../../assets/images/image.png'
import * as BsIcons from 'react-icons/bs'
import Tabs from '../../../../components/Reuseable/Tabs'
import { notification } from '../constants/test'
import * as IoIcons from 'react-icons/io'

const AdminProfile = () => {
  return (
    <div className="my-5 rounded-sm border-[1.5px] bg-white py-5 px-3">
        <div className="flex justify-start items-center border-b-[1px] space-x-2">
            <h1 className="font-Roboto font-semibold py-2">Notifications</h1>
            <div className='flex relative'>
                <IoIcons.IoIosNotifications size={30}className="" />
                <span className="font-Poppins text-sm absolute -top-2 left-4 w-5 h-5 rounded-full border-[1px] flex items-center justify-center bg-red-500 text-[#ffffff]">2</span>
            </div>
        </div> 

        <div className="mt-3">
            <Tabs tabs={notification} />
        </div>
    </div>
  )
}

export default AdminProfile