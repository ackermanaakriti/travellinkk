import React, { useEffect, useState } from 'react'
import {aboutTopBanner, ourTeam} from '../assets'
import {MetaDecorator, PageTopComponent, PageTopTextComponent} from '../components'
import { useGlobalContext } from '../context/useGlobalContext';
import { FetchtopAboutDatas } from '../utils/apiQueries';

const OurTeam = () => {
    const [topaboutUsData, setTopaboutUsData] = useState({});
    useEffect(() => {
        FetchtopAboutDatas().then(res => {
            setTopaboutUsData(res.data.data);
        }).catch((err) => console.log(err));
    }, [])

    const {setNavActive} = useGlobalContext();
    // Setting the nav state
    useEffect(() => {
        setNavActive('about-us');
    }, [])

    return (
        <>
        <MetaDecorator title="Our Team" />

        <div className="w-full bg-[#F5FCFF]">
            <div>
                <PageTopComponent title={"Our Team"}
                    image={aboutTopBanner}
                    setTextA={true}
                    setTextB={false}
                    />
            </div>

            <div className='w-full lg:px-globalPadding px-[11px] lg:py-[2%] pt-[5%]'>
            <div>
                    <PageTopTextComponent title={
                            topaboutUsData ?. title
                        }
                        discription={
                            topaboutUsData ?. details
                        }/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={topaboutUsData?.image}
                        alt='team Image'
                        className='py-8 object-contain w-full h-[55vh]'/>
                </div>
            </div>

        </div>
        </>
       
    )
}

export default OurTeam
