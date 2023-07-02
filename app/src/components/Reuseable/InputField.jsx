import React from 'react'

const InputField = ({label, id, name, type, placeholder, value, onChange }) => {
  return (
    <div className="relative">
         <input 
            id={name} 
            name={name} 
            type={type} 
          
            value={value}
            onChange={onChange}
            className="peer h-10 font-Poppins focus:outline-none placeholder-transparent border-b-[2px] border-gray-600 border-gray-30 text-sm" 
            placeholder={placeholder} 
            
          />
          <label htmlFor={name} 
              className="font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-400">
              {label}
          </label>
    </div>
  )
}



export default InputField;