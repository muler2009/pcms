import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Registration from '../../components/Registration'

const Header = () => {
  const [register, setRegister] = useState(false)

  return (
    <>
      <nav className="w-full sticky top-0 shadow-sm h-[100px]">
          <div className="px-4 py-5 container mx-auto">
              <div className="flex justify-between items-center">
                  <Link to='/'><h1 className="font-Oswald text-[25px] text-[#00bdff]">PCMS Project</h1></Link>
                  <div className="flex justify-center items-center space-x-5">
                    <Link to='test_api'>
                       <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">testAPI</p>
                    </Link>
                    <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">System Help</p>
                    <Link to="register">
                      <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">Register</p>
                    </Link>
                  </div>
              </div>
          </div>
      </nav>

      {
        register && <Registration register={register} setRegister={setRegister} />
      }
    
    </>
  )
}

export default Header