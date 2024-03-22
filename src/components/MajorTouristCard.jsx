import React from "react";
import "../styles/style.css";

const truncateWords = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};

const MajorTouristCard = ({ data, wordLimit }) => {
  const { image, title, details } = data;
  const truncatedDetails = truncateWords(details, wordLimit);
  return (
    <div>
      <div className="w-full mt-8">
        <div className="relative cursor-pointer">
          <img
            src={image}
            alt="Img"
            className="w-full h-[270px] lg:h-[401px] rounded-[24px] duration-300 object-cover"
          />

          <div className="flex flex-col absolute left-5 right-5 bottom-5 gap-[8px] text-white z-40">
            <h2 className="font-inter font-normal text-[21px] leading-[32px]">
              {title}
            </h2>
            <p className="font-semibold font-inter text-[24px] leading-[32px]" dangerouslySetInnerHTML={{ __html: truncatedDetails }} />         
          </div>
          <div className="sliderOverlay absolute left-0 right-0 bottom-0 rounded-[24px] z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default MajorTouristCard;
