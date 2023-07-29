import { format } from "date-fns";
import React from "react";
import * as RiIcons from 'react-icons/ri';
import {Pie, PieChart, Cell, Legend, ResponsiveContainer} from 'recharts'
import { AreaChart,  XAxis, CartesianGrid, Area, Tooltip, YAxis, LineChart, Line, Label } from "recharts";



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


export const ResultChart = () => {

    const data = [
        {
          "name": "M1",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "M2",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "M3",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "M4",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "M5",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
       
      ]
      
      return(
        <ResponsiveContainer width="100%" >
            <div className="text-sm py-10 bg-[#ffffff] shadow-sm -z-0">
                <LineChart width={550} height={250} data={data}                            
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Label value="Chart Title" position="top" fill="#f00" />
                </LineChart>
            </div>
        </ResponsiveContainer>
      )
}

export const SystemUsage = () => {

    const data = [
        {
          "name": "Owner",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Pro Manager",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "User",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "XYZ",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Other",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
       
      ]

    return(
      <ResponsiveContainer width="100%">
        <div className="text-sm py-10 bg-[#ffffff] shadow-sm">
            <AreaChart width={550} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                
            </AreaChart>
        </div>
      </ResponsiveContainer>

    )
}