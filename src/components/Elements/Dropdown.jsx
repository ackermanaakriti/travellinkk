import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
// import { BsStopFill } from "react-icons/bs";
import { useGlobalContext } from "../../context/useGlobalContext";
import { Link } from "react-router-dom";

const Dropdown = ({ categories }) => {
  const [isDetinationHovered, setIsDetinationHovered] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState();
  const [hoveredCategoryId, setHoveredCategoryId] = useState();

  const { navActive } = useGlobalContext();
  return (
    <div>
      <div
        className="relative"
        onMouseLeave={() => {
          setIsDetinationHovered(false);
          setIsCategoryHovered();
          setHoveredCategoryId();
        }}
      >
        <p
          className={`${
            navActive === "destination" && "font-bold text-[17px]"
          } pb-[0px]`}
          onMouseEnter={() => setIsDetinationHovered(true)}
        >
          Destination
        </p>
        {isDetinationHovered && categories?.length > 0 && (
          <div
            // className={`mt-[0] bg-black  whitespace-nowrap font-bold text-[17px] relative flex flex-col items-center`}
            className="relative bg-[#851578] whitespace-nowrap"
          >
         
              {/* <div className="absolute top-0 left-0 rotate-45 text-[8px] z-40 border-l border-t border-[#A3A3A3] text-white bg-white">
                <BsStopFill />
              </div> */}
              <div 
              className="absolute top-[0px] left-[40%] transform -translate-x-[50%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg" 
               >
                <div className="w-[220px]">
                {/* destination main menu */}
                {categories?.map((item, index) => (
                  <div key={index}>
                    <div>
                      {/* first */}
                      <div className="relative">
                        <div
                          onMouseEnter={() => {
                            setIsCategoryHovered(index);
                          }}
                          className={`font-semibold whitespace-normal text-[14px] hover:text-blue text-[#2D3134] py-[8px] px-[10px] flex justify-between gap-[7px] border-b border-[#2D3134]`}
                        >
                          {item && (
                            <Link
                              key={index}
                              to={`/country/${item?.id}`}
                            > 
                              <p className="pl-[20px]">{item?.name}</p>
                            </Link>
                          ) }
                         
                          {item?.package_categories.length > 0 && (
                            <p className="text-[21px]">
                            
                              <BiChevronRight />
                            </p>
                          )}
                        </div>
                     {/* second menu of destination cultural tours  */}
                        {isCategoryHovered === index &&
                          item?.package_categories?.length > 0 && (
                            <div
                              onMouseLeave={() => {
                                setIsDetinationHovered(null);
                                setHoveredCategoryId(null);
                              }}
                              className="absolute w-[100%]  top-0 right-[-100%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                            >
                              <div className=" "> 
                              {item?.package_categories?.map((item, index) => (
                                <div key={index} className="relative">
                                  <div
                                    onMouseEnter={() => {
                                      setHoveredCategoryId(index);
                                    }}
                                    className={`font-semibold whitespace-normal text-[14px] hover:text-blue text-[#2D3134] py-[8px] px-[10px] flex justify-between gap-[7px] border-b border-[#2D3134]`}
                                  >
                                    {item?.packages && (
                                      <Link
                                        key={index}
                                        to={`/location/${item?.slug}`}
                                      >
                                        <p>{item?.name}   </p>
                                      </Link>
                              
                                    ) 
                                  }
                                    {item?.packages.length > 0 && (
                                      <p className="text-[21px]">
                                        <BiChevronRight />
                                      </p>
                                    )}
                                  </div>
                                  {hoveredCategoryId === index &&
                                    item?.packages?.length > 0 && (
                                      <div
                                        onMouseLeave={() =>
                                          setHoveredCategoryId(null)
                                        }
                                        className="absolute w-[100%]  top-0 right-[-100%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                                      >
                                        <div>
                                          {item?.packages?.map(
                                            (item, index) => (
                                              <div
                                                key={index}
                                                className={`font-semibold whitespace-normal text-[14px] hover:text-blue text-[#2D3134] py-[8px] px-[10px] flex justify-between gap-[20px] border-b border-[#2D3134]`}
                                              >
                                                <Link
                                                  key={index}
                                                  to={`/details/${item?.slug}`}
                                                >
                                                  <p>{item?.name}</p>
                                                </Link>
                                              </div>
                                            )
                                          )}
                                        </div>
                                        {/* <div className="absolute top-[11%] left-[-2.5%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                          <BsStopFill />
                                        </div> */}
                                      </div>
                                    )}
                                </div>
                              ))}
                              {/* <div className="absolute top-[11%] left-[-2.5%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                <BsStopFill />
                              </div> */}
                            </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
