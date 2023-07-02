import React, { useEffect, useRef, useState } from 'react'
import { InputField, SelectInput, DatePickerComponent, CheckBok, Button } from '../Reuseable'
import * as Sl from 'react-icons/sl'
import * as Fa from 'react-icons/fa'
import { gender } from '../../constants/data/department'
import useRegister from '../../hooks/useRegister'

const TestRegistrationForm = () => {

    const refs = useRef()
    const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const { register, registerationHandler, registerationCleanFields, handleDateChange } = useRegister()
    const [validate_email, setValidateEmail] = useState(false)

    useEffect(() => {
        setValidateEmail(EMAIL_VALIDATOR_REGEX.test(register.email));
      }, [register.email]);

  return (
    <div className="bg-white my-10 border-[1px] border-[#ddd]">
        <div className="py-5 flex justify-center items-center">
            <h1 className="font-Oswald text-[25px] uppercase">User Test Registration</h1>
        </div>
        <form className="w-full" onSubmit={(event) => event.preventDefault()}>
            <div className="flex flex-col gap-8 py-5 px-5">
                <div className="flex space-x-5">
                    <InputField label="First Name" type="text" id="first_name" name="first_name" ref={refs} placeholder="First Name" value={register.first_name} onChange={registerationHandler} />
                    <InputField label="Last Name" type="text" id="last_name" name="last_name" placeholder="Last Name" value={register.last_name} onChange={registerationHandler}  />
                </div>
                <div className='flex justify-start items-center space-x-3 relative'>
                    <div className="relative">
                        <div className="border-b-2 border-black -px-2">
                            <Sl.SlCalender className="inline-flex mr-2" />
                            <DatePickerComponent className="peer h-10 text-black font-Poppins focus:outline-none placeholder-transparent border-gray-600 border-gray-30 text-sm w-[50%]" selected={register.birth_date} onChange={handleDateChange} />  
                        </div>
                        <label className="font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-400">
                            Date of Birth
                        </label>                       
                    </div>
                    <SelectInput label="Gender" data={gender} type="text" htmlFor="gender" id="gender" name="gender" value={register.gender} onChange={registerationHandler} />

                </div>

                <div className="flex space-x-5 ">
                    <div className='w-1/2 flex justify-between items-start space-x-5'>
                        <CheckBok label="Staff" id="staff" description="Staff User" name="is_staff" value={register.is_staff} onChange={registerationHandler} />
                        <CheckBok label="Active" id="is_active" description="Is the user active?" name="is_active" value={register.is_active} onChange={registerationHandler} />
                    </div>

                    <div className="w-1/2">
                        <div className={`${validate_email ? "ml-2 text-green-700 text-xs" : 'hidden'}`}>
                            <p>Done</p>
                        </div>
                        <Fa.FaTimesCircle
                            className={`${validate_email|| !register.fullname ? "hidden" : "flex justify-center items-center ml-1" }`}
                            color="red"
                            size={20}
                        />
                        <InputField label="Email" id="email" type="email" placeholder="Email address" name="email" value={register.email} onChange={registerationHandler}
                                    aria-invalid={validate_email ? "false" : "true"}
                        />
                        <p className="text-xs text-gray-400">Ex: email@domain.com</p>
                    </div> 


                </div>

                <InputField label="Username" id="username" type="text" placeholder="Username" name="username" value={register.username} onChange={registerationHandler} />

                <div className="flex justify-start items-start space-x-5">
                    <InputField label="Password" id="password" type="password" placeholder="Password" name="password" value={register.password} onChange={registerationHandler} />
                    <InputField label="Confirm password" id="confirm_password" type="password"  name="confirm_password" placeholder="Confirm password" value={register.confirm_password} onChange={registerationHandler} />
                </div>

                <div className="pt-5 flex space-x-5 justify-end">
                <Button label="Register" className="px-5 bg-[#ddd] text-sm border-none rounded-none hover:bg-white hover:text-black hover:ring-2 hover:ring-green-900 w-[30%]" />
                <Button label="Clear" className="px-5 bg-[#ddd] text-sm border-none rounded-none hover:bg-white hover:text-black hover:ring-2 hover:ring-green-900 w-[30%]" onClick={registerationCleanFields}/>

                </div>
                

                

            
            
            </div>
        </form>
</div>
  )
}

export default TestRegistrationForm