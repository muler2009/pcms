import React from 'react'
import * as Vsc from 'react-icons/vsc'
import * as Bs from 'react-icons/bs'

export const LoginErrorMessage = (props) => {
  const { show, setShow } = props

    return (
        show && (
            <div className='bg-black bg-opacity-20 inset-0 fixed top-0  flex justify-center'>
                <div className="bg-[#e8e8e8] w-1/2 h-1/3 lg:w-1/3 lg:h-[25%] relative top-24 border-[1px] border-[#c2c2c2] rounded-lg">
                    <div className={`flex justify-between items-center rounded-tl-lg rounded-tr-lg w-full px-5 py-3`}>
                        <h1 className={`font-Roboto tracking-wide text-xl`}>Notification</h1>
                        <Vsc.VscClose className={`hover:bg-red-400 cursor-pointer`} onClick={() => setShow(prev => !prev)} />
                    </div>
        
                    <div className="flex flex-col px-10 ">
                        <div className="flex space-x-8 mt-5">
                            <Bs.BsQuestionCircleFill size={70}/>
                            <h1 className="flex justify-end items-center text-[14px] font-Poppins">Please Username or Password is Empty</h1>
                        </div>
                        <div className="flex space-x-5 w-1/2 mx-auto">
                            <button className="btn-sm bg-[#fcfcfc] px-5">Logout</button>
                            <button className="btn-sm bg-[#fcfcfc] px-5">Cancel</button>
        
                        </div>
                    
        
                    </div>
                </div>
            </div>

        )
      )
  
}
