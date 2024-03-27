import React, { useEffect, useState } from 'react'
import PackagesCard from './PackagesCard'
import {PackagesCardListData} from '../data/PackagesCardListData'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { FetchAllTitleDatas, FetchpopulartripData } from '../utils/apiQueries'

const PopularTrips = ({data}) => {
    const [popularTripsData, setPopularTripsData] = useState([]);

    useEffect(() => {
        FetchpopulartripData().then(res => {
            setPopularTripsData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])
    console.log(popularTripsData)


    const navigate = useNavigate();
    return (
        <div className='w-full lg:px-globalPadding px-[11px] my-[2%]'>
            <div className='flex flex-col'>
                <div>
                    <h2 className='font-semibold font-inter text-[32px] pb-[30px] text-[#2D3134] leading-[32px] text-center'>{data?.home_page_trip_title}</h2>
                </div>
                <div>
                    <div className="flex flex-row flex-wrap md:-mx-7 mx-0  mt-3 gap-y-5 justify-center ">
                        {
                        popularTripsData?.slice(0, 7)?.map((item, index) => (
                            <PackagesCard key={index}
                                data={item} Package={item?.packageCategory?.name}
                                link={`/details/${item?.slug}`}
                                />
                        ))
                    } </div>
                </div>
                <div className="hover:opacity-90 mt-[4%] flex justify-center">                 
                        <Button handleOnclick={()=> navigate('/all-packages')} btnName="View All Trips" style="bg-transparent border-b-2 border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] "/>
             </div>
            </div>
        </div>
    )
}

export default PopularTrips
