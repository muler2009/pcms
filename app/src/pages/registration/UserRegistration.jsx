import React from 'react'
import { RegistrationForm, TestRegistrationForm } from '../../components/pageComponents'

const UserRegistration = () => {
  return (
    <div className="w-full flex justify-start items-start space-x-5 font-Poppins px-5">
       <RegistrationForm />
       <TestRegistrationForm />

   </div>
  )
}

export default UserRegistration