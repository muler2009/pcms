import React, { useState } from 'react'

const Input = ({label, defaultValue, type, onChange, placeholder}) => {

    const [value, setValue] = useState(defaultValue)
  return (
        <div className="font-Poppins flex flex-col gap-3">
            <label className="text-[16px]">{label}</label>
            <input 
                type={type} 
                className="input-md w-full"
                placeholder={placeholder}
            />
        </div>
  )
}

export default Input