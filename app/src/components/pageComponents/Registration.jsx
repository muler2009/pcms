import React from 'react'
import { format } from 'date-fns'
import * as Md from 'react-icons/md'
import * as Vsc from 'react-icons/vsc'
import * as Bi from 'react-icons/bi'
import { InputField, Input, SelectInput } from '../Reuseable'
import image from '../../assets/images/image.png'
import IconInput from '../Reuseable/IconInput'
import { department, gender } from '../../pages/private/sys_admin/constants/department'


const Registration = (props) => {
  const { register, setRegister } = props

  return (
    <React.Fragment>
        {
            register && (
                <div className="bg-black bg-opacity-5 inset-0 fixed top-0 flex justify-center z-50 pb-10">
                    <div className="w-2/3 bg-white my-10 border-[1px] border-[#ddd]">
                        <div className="border-b-[1px] bg-[#f4f5f7]">
                            <div className="flex justify-between items-center py-3 px-10">
                                <h1 className="font-Oswald text-[20px] uppercase">Staff Registration</h1> 
                                <div className="flex justify-center items-center space-x-2 cursor-pointer">
                                    <div className="w-7 h-7 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-[#ddd]"><Bi.BiMinus /></div>
                                    <div className="w-7 h-7 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-[#ddd]"><Vsc.VscChromeRestore /></div>
                                    <div className="w-7 h-7 flex justify-center items-center cursor-pointer hover:rounded-full hover:bg-[#ddd]" onClick={() => setRegister(prev => !prev)}><Md.MdClose /></div>
                               </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center px-10 py-5">
                            <div className="w-1/4">
                                <img src={image} alt="Logo" className="w-[60%]"/>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <h1 className="font-Oswald text-[25px] uppercase">User Registration Form</h1>
                                <p className="font-Poppins text-xs text-[#5c727d]">Mixed Investment Group LTD.</p>
                                <p className="font-Poppins text-xs text-[#5c727d]">project control management system(PCMS)</p>
                            </div>
                            <div className="w-1/2 border-[2px] border-black py-2 px-4">
                                <h1 className="font-Poppins text-sm">Date: 
                                    <span className="underline ml-2">
                                        { format(new Date(), "MMMM d, yyyy") }
                                    </span> 
                                </h1>
                                <div className="flex ">
                                    <h1 className="font-Poppins">Ref No </h1>
                                    <InputField id="" name="reference" placeholder="Ref No" className="" />                              
                                </div>
                               
                            </div>
                        </div>

                        {/* Main registration section */}
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="mx-5 my-2 border-[2px] border-black">
                                <div className="px-5 py-2 border-b-[2px] border-black flex justify-center">
                                    <h1 className="font-Poppins text-[18px] text-black uppercase">Employee Details</h1>
                                </div>
                                
                                <div className="flex"> 
                                    <div className="flex space-x-5 w-1/3 border-r-[2px] border-black">
                                        {/* Left Section */}
                                        <div className="px-10 mt-10 flex flex-col gap-6 mb-10">
                                            <div className="flex space-x-5">
                                                <InputField label="First Name" type="text" htmlFor="first_name" id="first_name" name="first_name" placeholder="First Name" />
                                                <InputField label="Last Name" type="text" htmlFor="last_name" id="last_name" name="last_name" placeholder="Last Name" />
                                            </div>
                                            <SelectInput label="Gender" data={gender} type="text" htmlFor="gender" id="gender" name="gender" />

                                            <IconInput label="Phone Number" type="number" htmlFor="phone number" id="department" placeholder="Phone Number"/>
                                        </div>
                                    </div>

                                    {/* middle section registration */}
                                    <div className="w-1/3 border-r-[2px] border-black">
                                        <div className='flex flex-col gap-6 mt-10 px-10'>
                                            <InputField label="Employee ID" type="text" htmlFor="empid" id="empid" name="empid" placeholder="Mx154" />
                                            <InputField label="Email" type="email" htmlFor="email" id="email" name="email" placeholder="example@aastu.edu.et" />

                                            <InputField label="Address" type="text" htmlFor="address" id="address" name="address" placeholder="Address" />

                                        </div>

                                    </div>

                                    {/* middle section registration */}
                                    <div className="mt-10 w-1/3 px-1">
                                        <div className='flex flex-col gap-6 px-10'>
                                            <InputField label="Employee ID" type="text" htmlFor="empid" id="empid" name="empid" placeholder="Mx154" />
                                            <SelectInput label="Qualification" data={department} type="text" htmlFor="qualification" id="qualification" name="qualification" />

                                            
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* User Account Information */}
                            <div className="mx-5 border-[2px] border-gray-400">
                                <div className="bg-gray-500 px-5 py-2">
                                    <h1 className="font-Poppins text-[18px] text-white uppercase text-center">Account Information</h1>
                                </div>
                                <div className="my-5">    
                                    <div className="px-10 flex flex-col gap-6 ">
                                        <div className="flex space-x-5">
                                            <Input label="Username" type="text" htmlFor="username" id="username" name="username" placeholder="Username" className="input-md rounded-none" />
                                            <Input label="Password" type="password" htmlFor="password" id="password" name="password" placeholder="Password" className="input-md rounded-none" />
                                            <Input label="Confirm Password" type="password" htmlFor="confirm_password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" className="input-md rounded-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Registration button grouping */}
                            <div className="flex space-x-5 mt-5 float-right mr-5">
                            <button className="flex justify-center items-center px-5 font-Poppins rounded-none text-sm">
                                    <span className="mr-1"><Bi.BiFace /></span>
                                    Save
                            </button>

                            <button className="flex justify-center items-center px-5 font-Poppins rounded-none text-sm">
                                    <span className="mr-1"><Bi.BiFace /></span>
                                    Clear
                            </button>
                            
                            </div>  

                        </form>
                     

                    </div>
                </div>
            )
        }
    </React.Fragment>
  )
}

export default Registration