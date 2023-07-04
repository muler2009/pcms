import React, {useEffect, useRef, useState } from 'react'
import * as Hi from 'react-icons/hi'
import * as Fa from 'react-icons/fa'
import * as Md from 'react-icons/md'
import { Input, InputField } from '../../../components/Reuseable'
import { IconContainer, Text } from '../../../assets/css/Container'
import useLogin from '../../../hooks/useLogin'
import { LoginErrorMessage } from '../../common/errors/LoginErrorMessage'

const Login = () => {

  
  const { loginCredentials, InputchangeHandler, onloginClicked, loginFailedModal, setLoginFailedModal, errorMessage, loginError } = useLogin()
  return (
    <>
    
  {/* <div className="bg-bg-img object-cover object-center container mx-auto"> */}
        <div className="flex flex-col justify-center items-center py-10 mt-10">
            <form className="w-1/2 mx-auto border-[1px] px-5 py-10 rounded-lg" onClick={(event) => event.preventDefault()}>
              <div className="flex justify-center items-center">
                <Hi.HiUserCircle className="text-opacity-30 text-red-700 text-[120px]" />
                {/* <img src={image} className="w-[150px]" alt="Company Logo" /> */}
              </div>
              <div className="flex flex-col gap-10 px-5 my-10">           
                  <InputField label="Username" type="text" id="username" name="username" required placeholder="username" value={loginCredentials.username} onChange={InputchangeHandler} loginError=       {loginError && loginCredentials.username} >
                      <Fa.FaUser size={20} />
                  </InputField>
                  {/* password filed */}
                <InputField label="Password" type="password" id="password" name="password" value={loginCredentials.password} onChange={InputchangeHandler} placeholder="Password" loginError={loginError && loginCredentials.password}>
                    <Md.MdVpnKey size={20} />
                </InputField>
                <Text className="text-center">Forgot Your password ?<p className="text-xs">please contact your system administrator</p></Text>
                <IconContainer className="flex space-x-5 cursor-pointer w-[50%] mx-auto">
                  {/* <div className="relative">
                    <BsArrowRightCircle size={40} color='green' onClick={onloginClicked}/>
                      <div className="hidden absolute bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
                        Login
                      </div>
                  </div>
                  <BsFillQuestionOctagonFill size={40} color='#00bdff'/>  
                  <div className="relative">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                      Cancel
                    </button>
                    <div className="absolute bg-gray-100 text-gray-700 rounded px-2 py-1 text-sm leading-tight opacity-0 hover:opacity-100 transition-opacity duration-500">
                      Tooltip text
                    </div>
                  </div> */}
                   <button className="px-5 w-full btn-sm " onClick={onloginClicked}>Login</button>
                </IconContainer>
              </div>            
            </form>
        </div>
          <LoginErrorMessage setLoginFailedModal={setLoginFailedModal} loginFailedModal={loginFailedModal} errorMessage={errorMessage} />
    {/* </div> */}
    </>
  )
}

export default Login;