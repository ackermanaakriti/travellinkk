import React, {useState} from "react";
import {IoIosArrowDropdown} from "react-icons/io";
import {Link} from "react-router-dom";
import { useGlobalContext } from "../../context/useGlobalContext";

const ResponsiveDropdown = ({categories, closeNav}) => {
    const [isDetinationHovered, setIsDetinationHovered] = useState(false)
    const [isCategoryHovered, setIsCategoryHovered] = useState();
    const [hoveredCategoryId, setHoveredCategoryId] = useState();
    
    const {navActive} = useGlobalContext();
    return (
        <div>
            <div className="w-full flex flex-col items-start px-2 py-2 font-semibold font-inter">
                <div className="flex items-center justify-between items-center gap-[10px] px-1 rounded-md font-medium">
                <p onClick={
                    () => setIsDetinationHovered(prev => !prev)
                }>Destination</p>
                {
                categories?.length > 0 && (
                    <p className="">
                        <IoIosArrowDropdown/>
                    </p>
                )
            }
                </div>
                
                {
                isDetinationHovered && categories ?. map((item, index) => (
                    <div key={index}>
                        <div> {/* first */}
                            <div className='relative'>
                                <div onClick={
                                        () => {
                                            if (isCategoryHovered === index) {
                                                setIsCategoryHovered()
                                            } else {
                                                setIsCategoryHovered(index)
                                            }

                                        }
                                    }
                                    className={`font-semibold whitespace-normal text-[16px] hover:text-blue text-[#2D3134] pt-2 px-[10px] flex justify-between items-center gap-[7px]`}>
                                    {
                                    item  &&  (
                                        <Link
                                        key={index}
                                        to={`/country/${item?.id}`}>{
                                            item ?. name
                                        }</Link>
                                    ) 
                                }
                                    {
                                    item ?. package_categories.length > 0 && (
                                        <p className="">
                                            <IoIosArrowDropdown/>
                                        </p>
                                    )
                                } </div>
                                {/* second */}
                                {
                                isCategoryHovered === index && item ?. package_categories ?. length > 0 && (
                                    <div className=" bg-white flex flex-col text-dark text-start font-[16px] z-30">
                                        {
                                        item ?. package_categories ?. map((item, index) => (
                                            <div key={index}>
                                                <div onClick={
                                                        () => {
                                                            if (hoveredCategoryId === index) {
                                                                setHoveredCategoryId()
                                                            } else {
                                                                setHoveredCategoryId(index)
                                                            }

                                                        }
                                                    }
                                                    className={`font-semibold whitespace-normal items-center text-[16px] hover:text-blue text-[#2D3134] pt-2 pl-[15px] flex justify-between gap-[7px]`}>
                                                    {
                                                    item  && (
                                                        <Link  key={index}
                                                        to={`/location/${item?.slug}`}>{
                                                            item ?. name
                                                        } </Link>
                                                    ) 
                                                    
                                                }
                                                    {
                                                    item ?. packages.length > 0 && (
                                                        <p className="">
                                                            <IoIosArrowDropdown/>
                                                        </p>
                                                    )
                                                } </div>
                                                {
                                                hoveredCategoryId === index && item ?. packages ?. length > 0 && (
                                                    <div className="bg-white flex flex-col text-dark text-start font-[16px] z-30">
                                                        <div> {
                                                            item ?. packages ?. map((item, index) => (
                                                                <div key={index}
                                                                    className={`font-semibold whitespace-normal text-[16px] hover:text-blue text-slate-500 pt-2 pl-[21px] flex justify-between gap-[20px]`}>
                                                                    <Link key={index}
                                                                        to={
                                                                            `/destination/${
                                                                                item ?. slug
                                                                            }`
                                                                        }
                                                                        onClick={closeNav}>
                                                                        <p>{
                                                                            item ?. name
                                                                        }</p>
                                                                    </Link>
                                                                </div>
                                                            ))
                                                        } </div>

                                                    </div>

                                                )
                                            } </div>
                                        ))
                                    } </div>
                                )
                            } </div>

                        </div>

                    </div>
                ))
            } </div>
             </div>
    )
}

export default ResponsiveDropdown
