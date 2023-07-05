import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="relative w-full font-Poppins text-sm font-semibold">
      <div className="bg-[#ffffff] flex justify-between items-center shadow-sm relative">
        {
          tabs.map((tab, index) => (
            <div key={index} onClick={() => handleTabClick(index)} className={`${activeTabIndex === index ? 'border-b-[2px] hover:border-b-[2px] border-blue-400 py-2  ' : 'py-2'} w-full cursor-pointer pl-4`}>
              <div className=''>{tab.label}</div>
            </div>
        ))}
      </div>
      <div className="">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;