import { format } from "date-fns";
import React from "react";
import * as RiIcons from 'react-icons/ri'

const content = [
    {from: "Yonas Habtie", message: "Hey Mule this is yonas. "},
    {from: "Ayu", message: "Its getting Dark! "},
    {from: "Manger", message: "Account Failurity"}, 
    {from: "Yonas Habtie", message: "Hey Mule this is yonas. "},
]


export const UnreadNotification = () => {
    return(
        <React.Fragment>
            <div className="relative h-[300px] overflow-y-scroll">   
                {
                    content?.map((content, index) => (
                        <div className={`flex flex-col gap-2 px-3 py-2  
                            ${index % 2 === 0 ? 'bg-sky-50' : ''} ${index === content.length - 1 ? 'border-none' : 'border-b-[1px]'  }`} key={index}>
                            <div className="flex flex-col gap-2 ">
                                <div className="font-semibold">{content.from} <span className="ml-2 text-xs text-gray-400">{content.message}</span></div>
                                <div className="flex justify-between text-xs">
                                    <h1>{format(new Date(), 'EE MMMM, do, yyyy')}</h1>
                                    <RiIcons.RiReplyFill size={15} />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
          
        </React.Fragment>
    )
}

export const AllNotification = () => {
    return(
        <React.Fragment>
            <div className="relative h-[300px] overflow-y-scroll">
                sdasd
            </div>
        </React.Fragment>
    )
}