import React, {useState} from 'react';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import {FaRegClock} from 'react-icons/fa';
import {TbTrekking} from 'react-icons/tb';
import {ImPriceTag} from 'react-icons/im';

const SearchCard = ({data, link, Package}) => {
    const navigate = useNavigate();
    const {
        main_image,
        name,
        duration,
        price,services
    } = data;   


    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
            <div className='w-full'>
                <div className='shadow-md overflow-hidden p-4 bg-white'>
                    <div className='w-full relative h-[255px] overflow-hidden rounded-[24px]'>
                        <img src={main_image}
                            alt='Img'
                            className='w-full h-[255px] rounded-[24px] hover:scale-110 ease-in-out duration-300 object-cover'/>
                    </div>
                    <div className='pt-4'>
                        <h2 className='font-semibold font-inter text-[18px] text-[#2D3134] whitespace-nowrap'>
                            {name}</h2>
                        <div className='flex flex-col gap-[8px] my-3'>
                            <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                                <div><FaRegClock className='w-[24px] h-24px'/></div>
                                <div className='overflow-hidden'>Duration : {duration}
                                    </div>
                            </div>
                            <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134]'>
                                <div><TbTrekking className='w-[24px] h-24px'/></div>
                                <div>Trip  : {services?.excerpt}</div>
                            </div>
                            <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                                <div><ImPriceTag className='w-[24px] h-24px'/></div>
                                <div>
                                    Price : starting from <span className='font-inter font-semibold text-[#0E9EDA]'>
                                        US$ {price} </span>
                                </div>

                            </div>
                        </div>

                        <div className='w-full flex justify-between gap-[25px] pt-2'>
                            <div className="w-full hover:opacity-90">
                                <Button handleOnclick={
                                        () => navigate(link)
                                    }
                                    btnName="View Details"
                                    style="w-full rounded-[5px] bg-transparent border border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] py-[11px]"/>

                            </div>

                            <div onMouseEnter={
                                    () => setIsButtonHovered(true)
                                }
                                onMouseLeave={
                                    () => setIsButtonHovered(false)
                                }
                                className="relative w-full">
                                <Button handleOnclick={
                                        () => navigate(`${link}?book=true`)
                                    }
                                    btnName="Book"
                                    style={
                                        `w-full rounded-[5px] ${
                                            isButtonHovered ? "bg-transparent text-[#0E9EDA]" : "bg-[#0E9EDA] text-white"
                                        } border border-[#0E9EDA] font-semibold font-inter px-[16px] py-[11px]`
                                    }/> {
                                isButtonHovered && (
                                    <div>
                                        <div className="absolute top-[-20px] left-[-20px] w-[20px] h-[20px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                        <div className="absolute top-[-5px] right-[-5px] w-[5px] h-[5px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                        <div className="absolute bottom-[-5px] left-[-5px] w-[10px] h-[10px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                        <div className="absolute bottom-[-5px] right-[-5px] w-[15px] h-[15px] rounded-full bg-[#0E9EDA] animate-sprinkle"></div>
                                    </div>
                                )
                            } </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default SearchCard
