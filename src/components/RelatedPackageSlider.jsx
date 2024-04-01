import React, {useRef,useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PackagesCard from './PackagesCard';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import {FaRegClock} from 'react-icons/fa';
import {TbTrekking} from 'react-icons/tb';
import {ImPriceTag} from 'react-icons/im';


const RelatedPackageSlider = ({relatedPackagesListData}) => {
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    console.log(relatedPackagesListData)
 

    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const settings = {
        dots: false,
        nav:false,
        infinite: false,
        autoplay: true,
        slidesToShow:3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (<div>
        <Slider {...settings}
            ref={sliderRef}
            className="">       
          {
                relatedPackagesListData ?. map((item, index) => (
                    <div className='px-[24px]'
                        key={index}>
                        {/* <PackagesCard key={index}
                                data={item} Package={item?.name}
                                link={`/details/${item?.slug}`}/> */}
                                  <div className='w-[100%]  '>
            <div className='w-full px-[30px]'>
                <div className='shadow-md overflow-hidden p-4 bg-white'>
                    <div className='w-full relative h-[255px] overflow-hidden rounded-[24px]'>
                        <img src={item.main_image}
                            alt='Img'
                            className='w-full h-[255px] rounded-[24px] hover:scale-110 ease-in-out duration-300 object-cover'/>
                    </div>
                    <div className='pt-4'>
                        <h2 className='font-semibold font-inter text-[18px] text-[#2D3134] whitespace-nowrap'>
                            {item.name}</h2>
                        <div className='flex flex-col gap-[8px] my-3'>
                            <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                                <div><FaRegClock className='w-[24px] h-24px'/></div>
                                <div>Duration : {item.duration}
                                    </div>
                            </div>
                            <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134]'>
                                <div><TbTrekking className='w-[24px] h-24px'/></div>
                                <div>Trip  : {item.packageCategory.name}</div>
                            </div>
                            <div className='flex gap-[16px] font-inter items-center font-normal text-[#2D3134] '>
                                <div><ImPriceTag className='w-[24px] h-24px'/></div>
                                <div>
                                    Price : starting from <span className='font-inter font-semibold text-[#0E9EDA]'> US$ {item.price}</span>
                                </div>

                            </div>
                        </div>

                        <div className='w-full flex justify-between gap-[25px] pt-2'>
                            <div className="w-full hover:opacity-90">
                                <Button handleOnclick={
                                        () => navigate(`/details/${item?.slug}`)
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
                                        () => navigate(`${'/details/${item?.slug'}}?book=true`)
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
        </div>
                    </div>
                ))
            } 
            </Slider>
    </div>)
}

export default RelatedPackageSlider
