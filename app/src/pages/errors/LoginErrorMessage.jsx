import React from 'react'
import * as Vsc from 'react-icons/vsc'
import * as Bs from 'react-icons/bs'
import * as Fa from 'react-icons/fa'
import * as Io from 'react-icons/io'
import { Button } from '../../components/Reuseable/index'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'


export const LoginErrorMessage = (props) => {
  const {  loginFailedModal, setLoginFailedModal } = props
  const { errorCode } = useLogin()

    return (
        loginFailedModal && (
            <div className="bg-black bg-opacity-20 inset-0 fixed top-0 flex justify-center items-center z-50 pb-10 font-Poppins">
                <div className='w-1/3 mx-auto bg-[#f6f8fa] my-10 flex flex-col border-[1px] border-[#ddd] py-0.5'>
                    <div className='text-black flex justify-between items-center px-4 py-2'>
                        <div className="flex items-center space-x-2">
                            <Fa.FaTimesCircle color='red' size={25}/>
                            <h1 className='font-Poppins text-[14px]'>PCMS</h1>
                        </div>
                        <div className="w-8 h-8 flex justify-center items-center hover:bg-[#f1f0f0] hover:rounded-full cursor-pointer" onClick={() => setLoginFailedModal(prev => !prev)} >
                            <Vsc.VscClose size={15} />
                        </div>
                    </div>
                    <div className="bg-[#ffffff] flex flex-col gap-5 px-16 py-5">
                        <div className="flex space-x-5 justify-start items-center">
                            <Io.IoIosInformationCircle size={50} />
                            <div className="flex flex-col gap-1">
                                <h1 className="font-Roboto text-[18px] font-semibold">Login Failed!</h1>
                                    {errorCode === "empty" && ( 
                                        <p className="text-sm">Username or password must be Filled, Please Try again!</p>
                    
                                    )} 
                            </div>
                           
                        </div>
                        

                        {/* ok button */}
                    </div>
                    <div className="flex justify-end items-center py-1 mr-10">
                        <Button label="Ok" className="btn-sm rounded-none px-10 text-sm border-[1px] border-black" onClick={() => setLoginFailedModal(prev => !prev)} />   
                    </div>
                </div>
            </div>

        )
      )
  
}
