import React, {useEffect, useRef, useState} from 'react'
import { format } from 'date-fns'
import { InnerContainer, OuterContainer } from '../../../../assets/css/Container'
import { userlink } from '../constants/userlink'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import {LoginErrorMessage} from '../../../common/errors/LoginErrorMessage'
import {RegistrationForm} from '../admin_component'


const UserTopNavigation = () => {
   
  const [modalTrigger, setModalTrigger] = useState(false)

  // creating an array of state for handling dropdown 
  const [drop, setDrop] = useState(userlink.map(() => false));
 
  const [loginFailedModal, setLoginFailedModal] = useState(false);

  // A function for closing one  menu while the other drop down is triggered
  const OpenOneandCloseOtherDropdown = (index) => {
    if (drop[index]) {
      // If it's already open, toggle its state
      handleDropdown(index);
    } else {
      // If it's closed, close all other dropdowns and open the clicked dropdown
      setDrop(userlink.map(() => false));
      handleDropdown(index);
    }
  }
  
  const handleDropdown = (index) => {
    setDrop((prev) => {
      const newStates = [...prev];
      if (newStates[index]) {
        newStates[index] = false;
      } else {
        newStates[index] = true;
      }
      return newStates;
    });
  };


   const renderTopbar = () => {
     return userlink.map((item, index) => {
        if (item.dropdown) {
          return (
            <div key={index} className="relative">
              <div className="flex items-center justify-between space-x-3 px-4 py-0 text-sm font-medium text-black cursor-pointer" 
                  onClick={() => OpenOneandCloseOtherDropdown(index)} >
                  <span>{item.label}</span>

                  { drop[index] ? <AiIcons.AiFillCaretUp /> : <AiIcons.AiFillCaretDown /> }
              </div>
              <div className={`absolute z-50 mt-3.5 ml-4 px-0.5 py-1 bg-[#EEE] border-[2px] border-t-0 border-black ${drop[index] ? 'block' : 'hidden'}`} >
                <div className="w-[200px]">
                  {
                    item?.subItems?.map((submenu, index) => 
                        submenu.modal 
                        ? (
                            <Link 
                              key={index}  
                              className="block px-4 py-2 text-xs text-gray-700 hover:bg-[#006] hover:text-[#fff]"
                              onClick={() =>{ setDrop(userlink.map(() => false));  setModalTrigger(prev => !prev)}}
                            >
                              {submenu.label}
                            </Link>
                        ) : (
                          <Link 
                            key={index}  
                            className="block px-4 py-2 text-xs text-gray-700 hover:bg-[#006] hover:text-[#fff]"
                            to={submenu.path}
                            onClick={() => setDrop(userlink.map(() => false))}
                          >
                          {submenu.label}
                          </Link>
                        )                   
                    )
                  }
                </div>    
              </div>
            </div>
         )
       } else {
         return (
            <div key={index} className="text-sm"> 
              <Link to={item.path} className="">
                {item.label}
              </Link>
            </div>
         );
       }
     });
   }
  return (
    <>
      <OuterContainer className='font-Poppins py-3 px-10 bg-[#EEE] text-black flex justify-between items-center border-b-[2px] border-black'>
          <InnerContainer className='flex justify-center items-center space-x-5'>
            <Link to="./user">
              <GrIcons.GrHome />
            </Link>
            {renderTopbar()}
          </InnerContainer>        
      </OuterContainer>

      <RegistrationForm setModalTrigger={setModalTrigger} modalTrigger={modalTrigger} />
      </>
  )
}

export default UserTopNavigation















