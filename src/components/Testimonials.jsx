import React, { useEffect, useState } from 'react'
import TestimonialsSlider from './TestimonialsSlider'
import Button from './Button'
import { Link } from 'react-router-dom'
import { FetchAllTitleDatas } from '../utils/apiQueries'

const Testimonials = ({data}) => {

    return (
        <div>
            <div className='w-full lg:px-globalPadding px-[11px] mt-[4%]'>
                <h2 className='font-semibold font-inter text-[32px] text-[#2D3134] leading-[32px] text-center'>{data?.home_page_testimonials_title}</h2>

            </div>
            <div className='overflow-x-hidden'>
                <TestimonialsSlider/>
            </div>
            <div className="hover:opacity-90 mt-[2%] flex justify-center pb-[4%]">
                <Link to={"/testimonials"}>
                    <Button handleOnclick={()=> ""} btnName="View All Testimonials" style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px]"/>
                </Link>
            </div>
        </div>
    )
}

export default Testimonials
