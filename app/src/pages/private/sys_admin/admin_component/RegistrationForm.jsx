import React, { useEffect, useRef, useState } from 'react'
import { InputField, SelectInput, DatePickComponent, CheckBok, Button, Input } from '../../../../components/Reuseable'
import { useSelector } from 'react-redux'
import { csrftoken } from '../../../../services/features/auth/authSlice'
import * as VscIcons from 'react-icons/vsc'
import { gender } from '../constants/department'
import useRegister from '../../../../hooks/useRegister'
import { OuterContainer, InnerContainer } from '../../../../assets/css/Container'



const RegistrationForm = ({modalTrigger, setModalTrigger}) => {

    const csrfToken = useSelector(csrftoken)

    const refs = useRef()
    const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const { register, registerationHandler, registerationCleanFields, handleDateChange, onRegisterClicked } = useRegister()
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
                                {/*  */}
                                    <span className="mr-1"><VscIcons.VscClose /></span>close
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="w-full mt-5 px-5" onSubmit={(event) => event.preventDefault()}>
                        <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} /> 
                        {/* row 1 */}
                        <div className="border-t-[2px] border-b-[2px] border-black bg-[#eee] py-2">
                            <h1 className='text-[18px] px-5 uppercase'>Personal Information</h1>
                        </div>

                        {/* row 2 */}
                        <div className="flex space-x-10 px-5 mt-7 mb-5">

                            <div className="flex flex-col gap-4">

                                <Input label="First Name" type="text" id="first_name" name="first_name" ref={refs} placeholder="First Name" value={register.first_name} onChange={registerationHandler} />
                                <Input label="Last Name" type="text" id="last_name" name="last_name" placeholder="Last Name" value={register.last_name} onChange={registerationHandler}  />
                                <SelectInput label="Sex" type="text" id="gender" name="gender" value={register.gender} onChange={registerationHandler} data={gender} />
                            </div>

                            <div className="flex flex-col gap-4">
                                <Input label="Email" id="email" type="email" placeholder="Email address" name="email" value={register.email} onChange={registerationHandler} aria-invalid={validate_email ? "false" : "true"} />

                                <DatePickComponent selected={register.date_of_birth} onChange={handleDateChange} />
                            </div>
                        </div>

                         {/* row  */}
                         <div className="border-t-[2px] border-b-[2px] border-black bg-[#eee] py-2">
                            <h1 className='text-[18px] px-5 uppercase'>Account Information</h1>
                        </div>

                        <div className="h-[300px]">

                        </div>

                        <div className="pt-5 flex space-x-5 justify-end">
                            <Button
                                label="Save"
                                className="px-5 bg-[#ddd] text-xs border-[2px] border-black rounded-none hover:bg-white hover:text-black hover:ring-2 hover:ring-green-900 w-[10%]"
                                onClick={onRegisterClicked}

                            />
                            <Button label="Clear" className="px-5 bg-[#ddd] text-sm border-none rounded-none hover:bg-white hover:text-black hover:ring-2 hover:ring-green-900 w-[10%]" onClick={registerationCleanFields}/>

                        </div>


                    </form>
                </InnerContainer>
            </OuterContainer>
        )
  )
}

export default RegistrationForm;