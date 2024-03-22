import React from 'react'

const BookTab = ({ tabNames, activeTabId, handleTabClick }) => {
  return (
    <div>
    {tabNames?.length > 0 && (
      <ul className="w-full flex items-center justify-around bg-white border-b-2 border-[#0E9EDA] rounded-[5px]">
        {tabNames.map((item, index) => (
          <li
            key={index}
            className={`grow  text-[12px] lg:text-[17px] md:text-[15px] sm:text-[14px] ${
              activeTabId === item?.id
                ? "bg-[#0E9EDA] text-white"
                : "bg-transparent text-dark"
            } font-inter cursor-pointer text-center py-[10px] rounded-t-[5px]  text-[9px] p-2 font-semibold whitespace-nowrap`}
            onClick={() => handleTabClick(item?.id)}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default BookTab