import React from "react";
import { RxCross2 } from "react-icons/rx";

const ImageView = ({ image, handleCross }) => {
  return (
    <div
      style={{
        zIndex: 99,
      }}
      className="rounded-lg fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[95%] lg:w-max h-[80%] flex flex-col items-center p-[10px] "
    >
      <div className="w-full flex justify-end cursor-pointer">
        <div
          onClick={handleCross}
          className="bg-[#FF0000] text-white w-[30px] h-[30px] rounded-full flex items-center justify-center shadow-lg"
        >
          <RxCross2 />
        </div>
      </div>

      <img src={image} className="w-[95%] h-[95%] object-contain" alt="" />
    </div>
  );
};

export default ImageView;
