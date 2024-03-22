import React, { useEffect, useState } from 'react'
import MajorTouristTabSlider from './MajorTouristTabSlider'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { FetchAllTitleDatas } from '../utils/apiQueries'

const MajorTouristAttractions = ({data}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='w-full lg:px-globalPadding px-[11px] my-[4%]'>
                <h2 className='font-semibold font-inter text-[32px] text-[#2D3134] text-center lg:text-start leading-[32px]'>{data?.home_major_tourist_attractions}</h2>
                <div>
                    
                </div>
                <div>
                    <MajorTouristTabSlider/>
                </div>
                <div className="hover:opacity-90 mt-[2%] flex justify-center">                 
                        <Button handleOnclick={()=> navigate('/all-packages')} btnName="Explore More" style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px]"/>
                  </div>
             </div>
        </div>
    )
}

export default MajorTouristAttractions
