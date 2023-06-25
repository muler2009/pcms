import React from 'react'

const InputU = ({label, id, defaultValue, name, type, placeholder, htmlFor, onChange, value}) => {
  return (
    <div className="relative">
         <input 
            id={id} 
            name={name} 
            type={type}
            value={value} 
            className="peer h-10 font-Poppins focus:outline-none placeholder-transparent border-b-[2px] border-gray-600 border-gray-30  text-sm text-blue-700" 
            placeholder={placeholder}
           // onChange={onChange} 
            
          />
         
    </div>
  )
}

export default InputU;