import React, { useEffect, useRef, useState } from 'react'
import { InputField, SelectInput, DatePickerComponent, CheckBok, Button } from '../../../../components/Reuseable'
import * as Sl from 'react-icons/sl'
import * as Fa from 'react-icons/fa'
import * as VscIcons from 'react-icons/vsc'
import { gender } from '../constants/department'
import useRegister from '../../../../hooks/useRegister'
import { OuterContainer, InnerContainer } from '../../../../assets/css/Container'

const RegistrationForm = ({modalTrigger, setModalTrigger}) => {

    const refs = useRef()
    const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const { register, registerationHandler, registerationCleanFields, handleDateChange } = useRegister()
    const [validate_email, setValidateEmail] = useState(false)

    useEffect(() => {
        setValidateEmail(EMAIL_VALIDATOR_REGEX.test(register.email));
      }, [register.email]);


  return (

        modalTrigger && (
            <OuterContainer className="bg-black bg-opacity-5 inset-0 fixed top-0 flex justify-center items-center z-50 py-10  font-Poppins" >
                <InnerContainer className="w-[40%] h-full  mx-auto bg-white my-10 border-[1px] border-[#ddd] px-1 text-sm">
                    <div className="flex justify-between items-center">
                        <div className={`flex flex-col py-10 px-5`}>
                            <h1 className="font-bold text-[25px]">PCMS <span className="text-[#00bfdd]">ProV</span></h1>
                            <p className="text-[#c4c0c0] text-sm pl-5">mixed investment group plc</p>
                        </div>

                        <div className="flex flex-col font-semibold">
                            <h1 className="flex items-center uppercase pr-5">project control management system</h1>
                            <p className="ml-auto pr-5 block text-[#c4c0c0] ">User registration form</p>
                            <div className='ml-auto pr-5 mt-4'>
                                <div className="flex items-center bg-red-600 py-1 px-5 text-white cursor-pointer" onClick={() => setModalTrigger(prev => !prev)}>
                                    <span className="mr-1"><VscIcons.VscClose /></span>close
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="w-full flex flex-col gap-5 px-10 mt-10" onSubmit={(event) => event.preventDefault()}>
                        <div className="flex space-x-10">
                            <InputField label="First Name" type="text" id="first_name" name="first_name" ref={refs} placeholder="First Name" value={register.first_name} onChange={registerationHandler} />
                            <InputField label="Last Name" type="text" id="last_name" name="last_name" placeholder="Last Name" value={register.last_name} onChange={registerationHandler}  />
                        </div>
                        <div className="flex space-x-10">
                            {/* <div className="relative"> */}
                                {/* <div className="border-b-2 border-black -px-2"> */}
                                    {/* <Sl.SlCalender className="inline-flex mr-2" /> */}
                                    <DatePickerComponent className="peer h-10 text-black font-Poppins focus:outline-none placeholder-transparent border-gray-600 border-gray-30 text-sm w-[50%]" selected={register.birth_date} onChange={handleDateChange} />
                                {/* </div> */}
                                {/* <label className="font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-400">
                                    Date of Birth
                                </label>                        */}
                            {/* </div> */}
                            <InputField label="Last Name" type="text" id="last_name" name="last_name" placeholder="Last Name" value={register.last_name} onChange={registerationHandler}  />
                        </div>



                    </form>
                </InnerContainer>
            </OuterContainer>
        )
  )
}

export default RegistrationForm;