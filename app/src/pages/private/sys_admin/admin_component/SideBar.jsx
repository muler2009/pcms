import React,{ useState } from 'react'
import * as Fa from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'
import useLogout from '../../../../hooks/useLogout'
import { InnerContainer, OuterContainer } from '../../../../assets/css/Container'
import { account, sidebar_link } from '../constants/sidebar'
import { Link } from 'react-router-dom'
import { Sidemenu } from '../admin_component'


const SideBar = () => {

    const [controller, setController] = useState(true) // a temporary state for handling the collapsable menu
    const { onLogoutClicked } = useLogout() // accessing the onLogoutClicked method
    
  return (
    <OuterContainer className="flex font-Poppins bg-[#ffffff]">
        <InnerContainer className={`${!controller ? 'w-20' : 'w-[19rem]'} border-[#ddd] flex flex-col shadow-md`}>
            <div className="py-5 my-5">
                <div className="flex justify-center items-center">
                    <div className="w-24 h-24 flex justify-center items-center">
                        <Fa.FaUser size={50} className={`${controller ? 'flex cursor-pointer' : 'block cursor-pointer mx-auto'}`} onClick={()=>setController(prev => ! prev)}   />
                    </div>
                    <div className={`flex flex-col ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                        <h1 className="font-bold text-[25px]">PCMS <span className="text-[#00bfdd]">ProV</span></h1>
                        <p className="text-[#c4c0c0] text-sm">Dashboard</p>
                    </div>
                </div>  
            </div>

            <div className="relative left-0 right-10 border-b-[1px] py-1 mx-10 mb-5">
                <h1 className="uppercase text-sm font-semibold">MAIN MENU</h1>
            </div>

            {
                sidebar_link?.map((sideParent, index) => {
                    return <Sidemenu key={index} sideParent={sideParent} controller={controller} />
                })
            }
                

            <div className="relative left-0 right-10 border-b-[1px] py-1 pt-12 mx-10 mb-5">
                <h1 className="text-sm font-semibold">Account</h1>

            </div>
            <div className="flex flex-col">

            {
                account?.map((account, index) => {
                    return(
                        <div className="relative px-3" key={index}>
                            <Link className={`flex items-center justify-start space-x-2 py-3 px-5`} to={account.path} >
                                <div size={20}>{account.icon}</div>
                                <div className={`duration-500 font-Poppins text-sm ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>{account.label}</div>
                            </Link>
                        </div>
                    )
                })
            }
            </div>


                
            
        </InnerContainer>

        
    </OuterContainer>
  )
}

export default SideBar