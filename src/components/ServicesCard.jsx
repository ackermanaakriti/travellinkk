import React from 'react'
import {Button} from '../components';
import {useNavigate} from 'react-router-dom';

const truncateWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };
  
const ServicesCard = ({data, isEven, link, showbtn, wordLimit}) => {

    const navigate = useNavigate();

    const {image, title, details} = data;
 

    const truncatedDetails = truncateWords(details, wordLimit);

    return (
        <div> {
            isEven ? (
                <div className='w-full flex flex-col justify-between lg:flex-row gap-[32px]'>
                    <div className='w-full lg:w-1/2 flex items-center'>
                        <img src={image}
                            alt='service Image'
                            className='w-full h-full lg:w-[551px] lg:h-[451px] 2xl:w-[701px] 2xl:h-[451px] object-cover'/>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center gap-[17px]'>
                        <h2 className='font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-start'>
                            {title}</h2>
                        <p className='font-inter text-[#5B5F62]' dangerouslySetInnerHTML={{ __html: truncatedDetails }} />                         
                        {
                        showbtn && (
                            <div className="w-max hover:opacity-90">
                                <Button handleOnclick={
                                        () => navigate(link)
                                    }
                                    btnName="Learn More"
                                    style="w-full rounded-[5px] bg-transparent border border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[25px] py-[11px]"/>
                            </div>
                        )
                    } </div>

                </div>
            ) : (
                <div className='w-full flex flex-col justify-between lg:flex-row gap-[32px]'>
                    <div className='w-full block lg:hidden lg:w-1/2 flex items-center'>
                        <img src={image}
                            alt='service Image'
                            className='w-full h-full lg:w-[551px] lg:h-[451px] 2xl:w-[701px] 2xl:h-[451px] object-cover'/>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center gap-[17px]'>
                        <h2 className='font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-start'>
                            {title} </h2>
                        <p className='font-inter text-[#5B5F62]' dangerouslySetInnerHTML={{ __html: truncatedDetails }} />
                        {
                        showbtn && (
                            <div className="w-max hover:opacity-90">
                                <Button handleOnclick={
                                        () => navigate(link)
                                    }
                                    btnName="Learn More"
                                    style="w-full rounded-[5px] bg-transparent border border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[25px] py-[11px]"/>
                            </div>
                        )
                    } </div>
                    <div className='hidden lg:w-1/2 lg:flex items-center justify-end'>
                        <img src={image}
                            alt='service Image'
                            className='w-full h-full lg:w-[551px] lg:h-[451px] 2xl:w-[701px] 2xl:h-[451px] object-cover'/>
                    </div>
                </div>
            )
        } </div>
    )
}

export default ServicesCard
