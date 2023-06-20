import React, { useState } from 'react'
import {BsArrowRightCircle, BsFillQuestionOctagonFill} from 'react-icons/bs'
import image from '../../assets/images/image.png'
import { Input, Button } from '../../components/Reuseable'
import { IconContainer, Text } from '../../assets/css/Container'

const Login = () => {
  const [name, setName] = useState("")
  return (
    <div className="bg-bg-img object-cover object-center container mx-auto">
        <div className="flex flex-col justify-center items-center py-10 mt-10">
            <form className="w-[35%] mx-auto border-[1px] px-5 py-10 rounded-lg" onSubmit={(event) => event.preventDefault()}>
              <div className="flex justify-center items-center">
                <img src={image} className="w-[150px]" />
              </div>
              <div className="flex flex-col gap-5 px-5 my-10">
                <Input label="Username" defaultValue="name" type="text" placeholder="Type your username" />
                <Input label="Password" defaultValue="name" type="password" placeholder="Type your Password" />
                <Text className="text-left">Forgot Your password ?<p className="text-xs">please contact your system administrator</p></Text>
                <IconContainer className="flex space-x-5 cursor-pointer w-[50%] mx-auto">
                  <div className="crelative">
                    <BsArrowRightCircle size={40} color='green' />
                      <div class="hidden cabsolute bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
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
                  </div>
                </IconContainer>
              </div>            
            </form>
        </div>
    </div>
  )
}

export default Login;