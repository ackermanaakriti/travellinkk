import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import { navItems } from "../data/navItems";
import { BiChevronRight } from "react-icons/bi";
import { BsStopFill } from "react-icons/bs";
import { useGlobalContext } from "../context/useGlobalContext";
import { FetchNavListDatas } from "../utils/apiQueries";
import Dropdown from "../components/Elements/Dropdown";

const NavBarList = () => {
  const [navListData, setNavListData] = useState([]);
  useEffect(() => {
    FetchNavListDatas()
      .then((res) => {
        setNavListData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const [activeNavItemIndex, setActiveNavItemIndex] = useState();
  const [activeNavItemIndexA, setActiveNavItemIndexA] = useState();
  const [activeNavItemIndexB, setActiveNavItemIndexB] = useState();

  const { navActive } = useGlobalContext();

  return (
    <div className="flex gap-[30px] font-semibold font-inter text-[#0E9EDA] cursor-pointer">
      <Link to={'/'}>
      <p className={`${
                  navActive === 'home' && "font-bold text-[17px]"
                }`}>Home</p>
      </Link>      
      <div
        onMouseLeave={() => {
          setActiveNavItemIndex(null);
          setActiveNavItemIndexA(null);
          setActiveNavItemIndexB(null);
        }}
        className="flex gap-[18px] font-semibold font-inter text-[#0E9EDA] cursor-pointer"
      >
        <Dropdown categories={navListData} />
        {navItems.map((item, index) => (
          <div key={index} className="font-inter font-semibold">
            {/* navitems mapping */}
            {item.Catagories?.length > 0 ? (
              <div
                onMouseEnter={() => setActiveNavItemIndex(index)}
                className={`whitespace-nowrap  ${
                  navActive === item?.slug && "font-bold text-[px]"
                } relative flex flex-col items-center`}
              >
                <Link  to={item?.link}>
                <p>{item?.menuTitle} </p></Link>
                
                {activeNavItemIndex === index &&
                  item?.Catagories?.length > 0 && (
                    <div
                      className="relative"
                      onMouseLeave={() => {
                        setActiveNavItemIndex(null);
                        setActiveNavItemIndexA(null);
                        setActiveNavItemIndexB(null);
                      }}
                    >
                      {/* <div className="absolute top-0 left-0 rotate-45 text-[8px] z-40 border-l border-t border-[#A3A3A3] text-white bg-white">
                        <BsStopFill />
                      </div> */}
                      <div>
                        <div className=" hello w-max absolute top-0 left-[50%]  transform -translate-x-[50%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg">
                          <div className="w-[180px]"> 
                          {/* catergory mapping */}
                          {item.Catagories.map((item, index) => (
                            <div
                              onMouseEnter={() => {
                                setActiveNavItemIndexA(index);
                              }}
                              key={index}
                              className={`relative  hover:text-blue text-[14px] text-[#34342d] py-[8px] px-[10px] flex justify-between gap-[20px] border-b border-[#2D3134]`}
                            >
                              <Link to={item?.link}>
                                <p className="text-[14px]">{item?.menuTitle} </p>
                              </Link>
                              { item?.subCatagories?.length > 0 && (
                                <p className="text-[21px]">
                                  <BiChevronRight />
                                </p>
                              )}
                              {activeNavItemIndexA === index &&
                                item?.subCatagories?.length > 0 && (
                                  <div
                                    onMouseLeave={() => {
                                      setActiveNavItemIndexA(null);
                                      setActiveNavItemIndexB(null);
                                    }}
                                    className="w-max absolute top-0 right-[-96.5%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                                  >
                                    {/* <div className="absolute top-[11%] left-[-2.5%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                      <BsStopFill />
                                    </div> */}
                                    {item?.subCatagories?.map((item, index) => (
                                      <div
                                        key={index}
                                        onMouseEnter={() => {
                                          setActiveNavItemIndexB(index);
                                        }}
                                        className={`relative hover:text-blue text-[#2D3134] py-[15px] px-[10px] flex justify-between gap-[20px] border-b border-[#2D3134]`}
                                      >
                                        <Link to={item?.link}>
                                          <p>{item?.menuTitle} </p>
                                        </Link>
                                        { item?.subCatagories?.length > 0 && (
                                          <p className="text-[21px]">
                                            <BiChevronRight /> 
                                          </p>
                                        )}
                                        {activeNavItemIndexB === index &&
                                          item?.subCatagories?.length > 0 && (
                                            <div
                                              onMouseLeave={() =>
                                                setActiveNavItemIndexB(null)
                                              }
                                              className="w-max absolute top-0 right-[-100%] bg-white flex flex-col text-dark text-start font-[16px] z-30 border border-[#A3A3A3] shadow-lg"
                                            >
                                              {/* <div className="absolute top-[11%] left-[-3%] rotate-45 text-[7px] z-40 border-l border-b border-[#A3A3A3] text-white bg-white">
                                                <BsStopFill />
                                              </div> */}
                                              {item?.subCatagories?.map(
                                                (item, index) => (
                                                  <Link
                                                    key={index}
                                                    to={item?.link}
                                                    className={`hover:text-blue text-[#2D3134] py-[15px] px-[10px] gap-[20px] border-b border-[#2D3134]`}
                                                  >
                                                    <p>{item?.menuTitle} </p>
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ) : (
              <Link
                onMouseEnter={() => setActiveNavItemIndex(index)}
                to={item?.link}
                className={`whitespace-nowrap ${
                  navActive === item?.slug && "font-bold text-[17px]"
                } hover:text-blue relative flex flex-col items-center`}
              >
                <p> {item?.menuTitle} </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBarList;
