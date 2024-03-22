import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useGlobalContext } from "../../context/useGlobalContext";
import { Link } from "react-router-dom";

const Dropdown = ({ categories }) => {
  const [isDetinationHovered, setIsDetinationHovered] = useState(false);
  const { navActive } = useGlobalContext();
  const [isCategoryHovered, setIsCategoryHovered] = useState();
  const [hoveredCategoryId, setHoveredCategoryId] = useState();

  return (
    <div onMouseLeave={() => {}}>
      <div className="relative" onMouseLeave={() => {}}>
        <p className={`${navActive === "destination" && "font-bold text-[17px]"} pb-[0px]`}>
          Destination
        </p>
        {categories?.length > 0 && (
          <div className="top-[36px] left-[-30px] absolute z-40">
            <div className="w-[200px] bg-[#ffffff] relative h-[100%]">
              {/* first mapping */}
              {categories?.map((firstCategory, index) => (
                <div
                  className="font-semibold whitespace-normal text-[16px] hover:text-blue text-[#2D3134] py-[15px] px-[10px] flex justify-between gap-[7px] border-b border-[#2D3134]"
                  key={index}
                >
                  <Link to={`/country/${firstCategory?.id}`}>
                    <p>{firstCategory.name}</p>{" "}
                  </Link>

                  {firstCategory?.package_categories.length > 0 && (
                    <p className="text-[21px]">
                      <BiChevronRight />
                    </p>
                  )}

{
                          firstCategory?.package_categories?.length > 0 && (
                            <div
                              onMouseLeave={() => {
                                setIsDetinationHovered(null);
                                setHoveredCategoryId(null);
                              }}
                              className="absolute w-[100%] top-0 right-[-100%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                            >
                                <div className="w-[200px]"> 
                              {firstCategory?.package_categories?.map((item, index) => (
                                <div key={index} className="relative">
                                  <div
                                    onMouseEnter={() => {
                                      setHoveredCategoryId(index);
                                    }}
                                    className={`font-semibold whitespace-normal text-[16px] hover:text-blue text-[#2D3134] py-[15px] px-[10px] flex justify-between gap-[7px] border-b border-[#2D3134]`}
                                  >
                                    {item?.packages && (
                                      <Link
                                        key={index}
                                        to={`/location/${item?.slug}`}
                                      >
                                        <p>{item?.name}   hello</p>
                                      </Link>
                              
                                    ) 
                                  }
                                    {item?.packages.length > 0 && (
                                      <p className="text-[21px]">
                                        <BiChevronRight />
                                      </p>
                                    )}
                                  </div>
                                 
                                </div>
                              ))}
                              {/* <div className="absolute top-[11%] left-[-2.5%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                <BsStopFill />
                              </div> */}
                            </div>
                             </div>
                          )} 

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
