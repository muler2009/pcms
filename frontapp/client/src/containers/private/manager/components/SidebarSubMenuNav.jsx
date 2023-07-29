import React, { useState } from "react";
import { Link } from "react-router-dom";


const SidebarSubMenuNav = (props) => {
  
    const { sideParent, controller } = props
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
  
    return(
      <React.Fragment>
          <div className='flex flex-col px-5 gap-1'>
                  <Link 
                    to={sideParent.path} 
                    onClick={sideParent.submenu && showSubnav} 
                    className={`flex justify-between px-2 ${!controller && 'hover:bg-inherit hover:border-none focus:border-none'} text-[#4c586e] font-semibold hover:bg-[#EEE] hover:text-[#006] hover:scale-[1.005]  focus:bg-[#eee] focus:border-r-[5px] focus:border-green-700`}> 
                        <div className={`flex items-center justify-center space-x-2 py-3 px-3 `}>
                          <div size={20}>{sideParent.icon}</div>
                          <h2 className={`duration-500 font-Poppins text-sm ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>{sideParent.label}</h2>
                        </div>
                    
                        <div className={`flex pr-4 items-center ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                          {sideParent.submenu && subnav
                            ? sideParent.iconOpened
                            : sideParent.submenu
                            ? sideParent.iconClosed
                            : null}
                          </div>
  
                  </Link>
                  <div className="pl-5">
                        {
                          subnav && 
                            sideParent.submenu.map((item, index) => {
                              return(
                                <Link to={item.path} key={index} className={`pl-5 flex items-center space-x-3 hover:bg-[#ebecf0] focus:bg-[#eee]  focus:border-green-700`}>
                                  {item.icon}
                                  <h1 className={`py-2 text-sm duration-500 font-Poppins ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                  {item.label}
                                  </h1>
                                </Link>
                              )
                            }) 
                        }
                  </div>
          </div> 
             
      </React.Fragment>
    )
  }


  export default SidebarSubMenuNav;