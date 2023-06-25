import React, { useState } from 'react'

const CheckBok = ({label, name, id, value}) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="flex items-center font-Poppins">
            <label htmlFor={id} className='flex'>{label}
            <input 
                type="checkbox" 
                id={id} 
                name={name} 
                value={value}
                checked={isChecked}
                onChange={(event) => setIsChecked(prev => !prev)}
                className="ml-3"
            />
         
            </label>
        </div>
      ); 
}

export default CheckBok