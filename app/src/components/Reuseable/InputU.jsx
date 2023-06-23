import React from 'react'

const InputU = ({label, id, defaultValue, name, type, placeholder, htmlFor, onChange}) => {
  return (
    <div className="relative">
         <input 
            id={id} 
            name={name} 
            type={type} 
            className="peer h-10 font-Poppins focus:outline-none placeholder-transparent border-b-[2px] border-gray-600 border-gray-30  text-sm text-blue-700" 
            placeholder={placeholder} 
            
          />
         
    </div>
  )
}

export default InputU;