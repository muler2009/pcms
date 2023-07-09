import React, { useState, useRef } from 'react'

const Input = ({id, type, name, placeholder, onChange, value, label, ref, className}) => {
  const refs = useRef()
  return (
        <div className="font-Poppins flex flex-col gap-2 text-sm">
            <label htmlFor={name} className="text-[15px]">{label}</label>
            <input 
                id={id}
                type={type}
                name={name}  
                className="input-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
  )
}

export default Input