import React from 'react'

const Header = () => {
  return (
    <nav className="w-full sticky top-0 shadow-sm h-[100px]">
        <div className="px-4 py-5 container mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="font-Oswald text-[25px] text-[#00bdff]">PCMS Project</h1>
                <p className="text-sm font-Poppins text-[#5c727d]">django-react-pcms</p>
            </div>
        </div>
    </nav>
  )
}

export default Header