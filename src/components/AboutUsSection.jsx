import React, { useEffect, useState } from 'react';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import {FetchAboutDatas} from '../utils/apiQueries';

const AboutUsSection = () => {
    const [aboutSectionData, setAboutSectionData] = useState({});
    useEffect(() => {
        FetchAboutDatas().then(res => {
          setAboutSectionData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const navigate = useNavigate();

    return (
        <div>
            <div className='w-full flex gap-[40px] flex-col lg:flex-row justify-between lg:px-globalPadding px-[11px] my-[4%]'>
                <div className='w-full flex items-center lg:w-1/2'>
                    <img src={aboutSectionData?.image}
                        alt='About Image'
                        className='h-[301px] lg:h-[501px] w-full object-cover'/>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center gap-[16px]'>
                    <h2 className='font-semibold font-inter text-[32px] text-[#2D3134] leading-[32px]'>
                        {
                        aboutSectionData ?. title
                    }</h2>
                    <p className='font-normal font-inter text-[#5B5F62]'
                        dangerouslySetInnerHTML={
                            {
                                __html: aboutSectionData ?. details ?. length > 600 ? aboutSectionData.details ?. slice(0, 600) + "..." : aboutSectionData ?. details
                            }
                        }/>

                    <Button handleOnclick={
                            () => navigate('/about-us')
                        }
                        btnName="Learn More"
                        style="w-max rounded-[5px] bg-transparent border border-[#0E9EDA] font-semibold text-[#0E9EDA] font-inter px-[16px] py-[11px] my-5"/>

                </div>

            </div>
        </div>
    )
}

export default AboutUsSection
