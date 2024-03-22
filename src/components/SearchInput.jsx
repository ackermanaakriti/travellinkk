import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/useGlobalContext";

const SearchInput = ({ closeNavbar }) => {
  const navigate = useNavigate();
  const { setSearchQuary, searchQuary } = useGlobalContext();

  const [destination, setDestination] = useState("");

  const handleSubmit = async () => {
    if (!destination) return;

    navigate(`/search?destination=${destination}`);
    closeNavbar();
  };
  return (
    <div>
      <div className="w-max flex justify-end relative">
        <input
          type="text"
          placeholder="Search Trip"
          value={searchQuary}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          onChange={(e) => {
            setDestination(e.target.value);
            setSearchQuary(e.target.value);
          }}
          className="w-[197px] h-[40px] font-inter font-medium text-[16px] leading-[18px] pr-[8px] pl-[25px] py-[5px] text-[#2D3134] border-b border-[#2D3134] outline-0"
        />
        <AiOutlineSearch className="w-[21px] h-[21px] text-[#2D3134] absolute absolute left-[0%] top-[50%] transform -translate-y-[50%]" />
      </div>
    </div>
  );
};

export default SearchInput;
