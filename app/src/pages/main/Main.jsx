import React, {useState} from 'react'
import Login from '../login/Login'

const Main = () => {

    const [shoewLogin, setShowLogin] =useState(false)
  return (
    <div className='w-full h-vh bg-black h-vh bg-opacity-30 py-56'>

        <div className="container mx-auto relative top-10">
            <div className='w-full flex justify-center items-center'>

                <div className="border-r-[1px] border-black w-1/2">
                    <h1 className="text-[46px] font-Oswald leading-9 tracking-wide">Project Control Management System</h1>
                </div>
                <div className=" w-1/2 relative">
                    
                    {
                        shoewLogin ? (
                            <div className="absolute top-0 left-0 w-full z-10 flex justify-center items-center">
                                <Login />
                            </div>
                        ) : (
                            <h1 className='font-Poppins' onClick={() => setShowLogin(prev=> !prev)}>Click</h1>
                        )
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main