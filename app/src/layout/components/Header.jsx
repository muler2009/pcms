import React from 'react'

const Header = () => {
  return (
    <nav className="w-full sticky top-0 shadow-sm h-[100px]">
        <div className="px-4 py-5 container mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="font-Oswald text-[25px] text-[#00bdff]">PCMS Project</h1>
                <div className="flex justify-center items-center space-x-5">
                  <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">System Help</p>
                  <p className="text-sm font-Poppins text-[#5c727d] cursor-pointer hover:underline">Register</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header