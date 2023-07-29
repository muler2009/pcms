import React, { useState } from 'react'

const CheckBok = ({label, name, id, value, description, onChange}) => {
    return (
        <div className='flex flex-col font-Poppins'>
            <label className=" text-gray-500 text-sm mb-1">{description}</label>
            <div className="flex items-center">
                <label htmlFor={id} className='flex'>{label}
                    <input 
                        type="checkbox" 
                        id={id} 
                        name={name} 
                        value={value}
                        checked={value}
                        onChange={onChange}
                        className="ml-3 rounded-none"
                    />
                </label>
            </div>
        </div>
      ); 
}

export default CheckBok