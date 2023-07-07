import React from 'react'
import { department } from '../../pages/private/sys_admin/constants/department'

const SelectInput = ({label, id, defaultValue, name, type, placeholder, htmlFor, onChange, data}) => {
  return (
    <div className="relative">
         <select 
            id={id} 
            name={name} 
            type={type} 
            className="peer w-full h-10 font-Poppins text-sm focus:outline-none placeholder-transparent border-b-2 border-gray-600 border-gray-30 bg-white text-blue-700" 
            placeholder={placeholder}
            data={data} >
            <option className="text-sm text-black">--Select One --</option>
                {
                    data?.map((data, index) =>(
                            <option key={index} >
                                {data.label}
                            </option>
                        ))
                }
          </select>
          <label htmlFor={htmlFor} 
              className="font-Poppins text-sm absolute left-0 -top-3.5 peer-placeholder-shown:text-base text-gray-500 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400">
              {label}
          </label>
    </div>
  )
}

export default SelectInput