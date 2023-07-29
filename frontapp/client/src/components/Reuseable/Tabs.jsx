import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="relative w-full font-Poppins text-sm font-semibold">
      <div className="bg-[#ffffff] flex justify-between items-center shadow-sm relative w-1/2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${
              activeTabIndex === index
                ? "border-b-2 border-green-400 shadow-md py-2"
                : "py-2"
            } w-full cursor-pointer pl-4`}
          >
            <div className="flex justify-start items-center whitespace-nowrap px-5">
              <span className="text-[20px]">{tab.icon}</span>
              {tab.label}
            </div>
          </div>
        ))}
      </div>
      <div className="p-5">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
