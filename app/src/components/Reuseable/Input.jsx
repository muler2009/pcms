import React, { useState } from 'react'

const Input = ({label, defaultValue, type, id, name, onChange, placeholder, className}) => {

  const [value, setValue] = useState(defaultValue)

  return (
        <div className="font-Poppins flex flex-col gap-3 text-sm">
            <label htmlFor={name} className="text-[15px]">{label}</label>
            <input 
                type={type}
                id={id}
                name={name}  
                className={className}
                placeholder={placeholder}
            />
        </div>
  )
}

export default Input