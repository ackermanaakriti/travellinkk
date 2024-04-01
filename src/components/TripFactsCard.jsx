import React, {useState} from 'react';
import { Button, PopupCustomizeForm} from '../components';
import {BiSolidMapPin} from 'react-icons/bi'
import {FaRegClock} from 'react-icons/fa'
import {ImPriceTag} from 'react-icons/im'
import {PiMapPin} from 'react-icons/pi'
import {TbTrekking} from 'react-icons/tb'
import {GiNetworkBars} from 'react-icons/gi'
import {BsImageAlt} from 'react-icons/bs'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {MdOutlineGroups} from 'react-icons/md'
import {useGlobalContext} from '../context/useGlobalContext';

const TripFactsCard = ({data, handleBtnClickA, handleShareClick}) => {
    const {setOverlay} = useGlobalContext();

    const [isShowDetails, setIsShowDetails] = useState(false);

    const {
        country,
        region,
        trip,
        level,
        max_altitude,
        best_season,
        duration,
        group_size,
        services,
        price,
        packageCategory
    } = data;

    return (
        <div className='relative'>
            <div className=''>
                <h2 className='font-semibold font-inter text-[18px] text-[#2D3134] whitespace-nowrap'>
                    Trip Facts</h2>
                <div className='flex flex-col gap-[11px] my-3'>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><BiSolidMapPin className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Country :
                            </strong> <span> {country?.name}</span> 
                                       </div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><PiMapPin className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Region :
                            </strong> <span>  {region}</span>
                            </div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><TbTrekking className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Trip  :
                            </strong> <span>
                               {packageCategory.name}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><GiNetworkBars className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Level :
                            </strong> <span>
                            {level}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><BsImageAlt className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Max Altitude :
                            </strong> <span>
                            {max_altitude}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><TiWeatherPartlySunny className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Best Season :
                            </strong> <span>
                            {best_season}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><FaRegClock className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Duration :
                            </strong> <span>
                            {duration}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><MdOutlineGroups className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Group Size  :
                            </strong> <span>
                            {group_size}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134]'>
                        <div><TbTrekking className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Service :
                            </strong> <span>
                            {services?.title}
                            </span></div>
                    </div>
                    <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                        <div><ImPriceTag className='w-[24px] h-24px'/></div>
                        <div>
                            <strong>Price :
                            </strong> <span> starting from <span className='font-inter font-semibold text-[#0E9EDA]'>
                                 US${price} </span>
                            per person </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full pt-4">
                <Button btnName="Book"
                    handleOnclick={
                        () => handleBtnClickA()
                    }
                    style={`w-full rounded-[5px] bg-[#15688A] hover:bg-[#0E9EDA]/95 text-white border border-[#0E9EDA] font-semibold font-inter px-[32px] py-[11px]`}/>
            </div>
            <div className="relative w-full pt-4">
                <Button btnName="Share with your friends"
                    handleOnclick={
                        () => handleShareClick()
                    }
                    style={`w-full rounded-[5px] bg-transparent hover:opacity-[0.9] text-[#0E9EDA] border border-[#0E9EDA] font-semibold font-inter px-[32px] py-[11px]`}/>
            </div>
            <div className="relative w-full pt-4">
                <Button btnName="Customize your own trip"
                    handleOnclick={
                        () => {
                            setIsShowDetails(true);
                            setOverlay(true);
                        }
                    }
                    style={`w-full rounded-[5px] bg-[#E1EFFF] hover:opacity-[0.9] text-[#0E9EDA] border border-[#0E9EDA] font-semibold font-inter px-[32px] py-[11px]`}/>
            </div>
        <div className='z-40'>
            {
            isShowDetails && <PopupCustomizeForm handleCrossA={
                () => {
                    setIsShowDetails(false);
                    setOverlay(false);
                }
            }/>
        } </div>

    </div>

    )
}

export default TripFactsCard
