import React, { useState } from 'react'
import { InnerContainer, OuterContainer } from '../../../../assets/css/Container'
import { topnav } from '../manager_constants/topnav'
import { Link } from 'react-router-dom'

const TopSubNavigationBar = () => {
    const [active , setActive] = useState(-1)
  return (
   <OuterContainer className='px-5 bg-[#ebecf0] w-full pt-4 pb-2 border-b-[2px] font-Roboto'>
        <InnerContainer className="flex justify-start items-center space-x-7 px-4 ">
            {
                topnav?.map((topna, index) => (
                    <Link key={index} to={topna.path} className="relative px-0.5 flex justify-center items-center font-Poppins text-sm" onClick={() =>setActive(index)}>
                        <div className={`${index === 0 ? '' : 'border-l-[1px] border-[#afafaf] px-3' } hover:after:content-[""] hover:after:block hover:after:absolute hover:after:left-0 hover:after:-bottom-[9px] hover:after:w-[100%] hover:after:h-[2px] hover:after:bg-[#000] hover:after:transform hover:after:origin-bottom-left hover:after:transition-transform 
                        ${index === active ? 'after:content-[""] after:block after:absolute after:left-0 after:-bottom-[9px] after:w-[100%] after:h-[2px] after:bg-[#000] after:transform after:origin-bottom-left after:transition-transform' : "" }`}>
                            {topna.label}
                        </div>
                    </Link>
                ))
            }
        </InnerContainer>
   </OuterContainer>
  )
}

export default TopSubNavigationBar