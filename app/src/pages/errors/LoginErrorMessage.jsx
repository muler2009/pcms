import React from 'react'
import * as Vsc from 'react-icons/vsc'
import * as Bs from 'react-icons/bs'
import * as Fa from 'react-icons/fa'

export const LoginErrorMessage = (props) => {
  const {  loginFailedModal, setLoginFailedModal } = props

    return (
        loginFailedModal && (
            <div className="bg-black bg-opacity-5 inset-0 fixed top-0 flex justify-center items-center z-50 pb-10 font-Poppins">
                <div className='w-1/3 mx-auto bg-[#9eb9d4] my-10 flex flex-col border-[1px] px-1 py-0.5 border-black rounded-t-lg'>
                    <div className='text-black flex justify-between items-center px-4 py-2'>
                        <h1 className='font-Poppins'>Notification</h1>
                        <Vsc.VscClose size={20} onClick={() => setLoginFailedModal(prev => !prev)}/>
                    </div>
                    <div className="bg-[#f0f0f0] flex flex-col gap-5 px-16 py-5">
                        <div className='flex items-center space-x-2'>
                           <Fa.FaTimesCircle color='red'/>
                           <h1 className="font-Poppins">Login Failed!</h1>
                        </div>
                        <div className='flex items-center space-x-2'>
                           <h1>Username or Password is empty</h1>
                        </div>
                    </div>
                </div>
            </div>

        )
      )
  
}
