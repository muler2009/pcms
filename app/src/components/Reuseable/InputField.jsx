import React from 'react'

const InputField = ({label, id, name, type, placeholder, value, onChange, children, loginError }) => {
  
  const inputClassName = `peer h-10 font-Poppins focus:outline-none placeholder-transparent border-b-[2px] border-gray-600 border-gray-30 text-sm ${loginError ? 'border-red-500 text-red-500' : ''}`

  return (
    <div className="relative flex space-x-0 items-center">
        
          <input 
              id={name} 
              name={name} 
              type={type} 
              value={value}
              onChange={onChange}
              className={inputClassName}
              placeholder={placeholder} 
      
            />
             {children && (
                <span className={`absolute right-0 top-1.5 h-full pl-2 text-gray-400 ${loginError ? 'text-red-500': ''}`}>
                  {children}
                </span>
              )}     
          <label htmlFor={name} 
              className={`font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm ${loginError ? 'peer-focus:text-red-500' : 'peer-focus:text-green-400'}`}>
              {label}
          </label>
          
    </div>
  )
}



export default InputField;