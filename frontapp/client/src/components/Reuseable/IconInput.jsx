import React from 'react'
import { BiFace } from 'react-icons/bi'

const IconInput = ({label, id, defaultValue, name, type, placeholder, htmlFor, onChange}) => {
  return (
    <div className="relative flex flex-wrap items-stretch mb-3">
        <aside className="flex">
            <input 
                id={id} 
                name={name} 
                type={type} 
                className="peer h-10 font-Poppins focus:outline-none placeholder-transparent border-b-2 border-gray-600 border-gray-30 pl-11" 
                placeholder={placeholder}        
            />
            <span className="font-Poppins font-normal absolute text-center text-gray-400 bg-transparent text-base items-center justify-center pl-1 py-2">
                +251
            </span>
        </aside>
          <label htmlFor={htmlFor} 
              className="font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400">
              {label}
          </label>
    </div>
  )
}

export default IconInput