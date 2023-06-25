import React, { useState } from 'react'

const Input = ({id, type, name, placeholder, onChange, value, label,className}) => {
  return (
        <div className="font-Poppins flex flex-col gap-3 text-sm">
            <label htmlFor={name} className="text-[15px]">{label}</label>
            <input 
                id={id}
                type={type}
                name={name}  
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
  )
}

export default Input