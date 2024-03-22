import React from "react";
import "../styles/style.css";
import {Link} from "react-router-dom";
import {SearchInput} from "../components";
import NavBarList from "./NavBarList";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { useGlobalContext } from "../context/useGlobalContext";
import { logo1 } from "../assets";

const Navbar = () => {
    const {siteInfo} = useGlobalContext();

    return (
        <> {/*....Nav Section...*/}
            <nav className="w-full shadow-xl bg-white">
                <div className="w-full lg:block hidden lg:flex gap-[30px] justify-between px-[20px] 2xl:px-globalPadding py-[10px]">

                    <div className="w-full flex gap-[21px] items-center">
                        <div>
                            <Link to="/">
                                <img src={logo1}
                                    className="lg:w-fit object-contain"
                                    alt="logo"
                                    style={
                                        {
                                            // width: '155px',
                                            height: '82px'
                                        }
                                    }
                                    />
                            </Link>
                        </div>
                        {/* <div className="flex flex-col text-center">
                            <h2 className="text-blue font-bold font-montserrat text-[32px] leading-[32px] whitespace-nowrap">Travel Link Services</h2>
                            <p className="font-medium font-inter text-[#2D3134] text-[15.6px] whitespace-nowrap">Professional Tour Operator and Travel Agent</p>
                        </div> */}
                    </div>

                    <div className="w-full flex flex-col gap-[16px] items-end justify-center">
                        <SearchInput closeNavbar={()=> ''}/>
                        <div>
                            <NavBarList/>

                        </div>
                    </div>
                </div>
                <div className="lg:hidden block">
                    <ResponsiveNavBar/>
                </div>
            </nav>


        </>
    );
};

export default Navbar;
