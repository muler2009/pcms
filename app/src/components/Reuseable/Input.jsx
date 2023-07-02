import React, { useState, useRef } from 'react'

const Input = ({id, type, name, placeholder, onChange, value, label, ref, className}) => {
  const refs = useRef()
  return (
        <div className="font-Poppins flex space-x-4 items-center  text-sm">
            <label htmlFor={name} className="text-[15px] text-right">{label}</label>
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